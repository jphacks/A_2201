<template>
  <p>最後にタグ付けを行えます。該当するタグを選んでください!</p>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">タグ</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" value="仕事" v-model="tag" @change="inputTag">
            仕事
          </label>
          <label class="checkbox">
            <input type="checkbox" value="趣味" v-model="tag" @change="inputTag">
            趣味
          </label>
          <label class="checkbox">
            <input type="checkbox" value="学習" v-model="tag" @change="inputTag">
            学習
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InputTag",
  setup() {
    const store = useStore();

    const tag = ref(store.state.bookmark.tag);

    const inputTag = () => {
      store.dispatch("inputTag", tag.value);
    };

    return {
      tag, inputTag
    };
  }
}
</script>

<style scoped>

</style>