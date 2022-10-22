<template>
  <p>登録したいブックマークのURLを入力してください！</p>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">URL</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="https://..." v-model="url" @change="inputUrl">
        </div>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">ブックマーク名</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="ウェブページの名前を入力してください" v-model="title" @change="inputTitle">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InputURL",
  setup() {
    const store = useStore();

    const url = ref(store.state.bookmark.url);
    const title = ref(store.state.bookmark.title);

    store.dispatch("setInvalidUrl");
    store.dispatch("setInvalidTitle");
    
    const inputUrl = () => {
      store.dispatch("inputUrl", url.value);

      let url_info;
      try {
        url_info = new URL(url.value);
        console.log(url_info);
        store.dispatch("setValidUrl");
      } catch(e) {
        console.log(e);
        store.dispatch("setInvalidUrl");
      }
    };

    const inputTitle = () => {
      store.dispatch("inputTitle", title.value);

      title.value != "" ? store.dispatch("setValidTitle"): store.dispatch("setInvalidTitle");
    };

    return {
      url, title, inputUrl, inputTitle
    };
  }
}
</script>

<style scoped>

</style>