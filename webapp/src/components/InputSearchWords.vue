<template>
  <p>このWebページを見つけた時に入力した検索ワードは何でしたか？</p>
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
            placeholder="（例）Java バージョン 変更"
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