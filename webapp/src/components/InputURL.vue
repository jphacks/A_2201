<template>
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

    const inputUrl = () => {
      store.dispatch("inputUrl", url.value);
    };

    const inputTitle = () => {
      store.dispatch("inputTitle", title.value);
    };

    return {
      url, title, inputUrl, inputTitle
    };
  }
}
</script>

<style scoped>

</style>