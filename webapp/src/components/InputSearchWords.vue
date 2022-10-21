<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">検索ワード</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="ウェブページを見つけた時に入力した検索ワードを教えてください"
            v-model="search_word"
            @change="inputSearchWord"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InputSearchWords",
  setup() {
    const store = useStore();

    const search_word = ref(store.state.bookmark.search_word);

    const inputSearchWord = () => {
      store.dispatch("inputSearchWord", search_word.value);
    };

    return {
      search_word, inputSearchWord
    };
  }
}
</script>

<style scoped>

</style>