<template>
  <div class="check_input">
    <table class="table">
      <tr>
        <th>URL</th>
        <td>{{ bookmark.url=="" ? "(Empty)" : bookmark.url }}</td>
      </tr>
      <tr>
        <th>タイトル</th>
        <td>{{ bookmark.title=="" ? "(Empty)" : bookmark.title }}</td>
      </tr>
      <tr>
        <th>検索ワード</th>
        <td>{{ bookmark.search_word=="" ? "(Empty)" : bookmark.search_word }}</td>
      </tr>
      <tr>
        <th>説明</th>
        <td>{{ bookmark.summary=="" ? "(Empty)" : bookmark.summary }}</td>
      </tr>
      <tr>
        <th>理由</th>
        <td>{{ bookmark.reason=="" ? "(Empty)" : bookmark.reason}}</td>
      </tr>
      <tr>
        <th>評価</th>
        <td>
          <img alt="animal" :src="require('@/assets/'+ bookmark.choice[0] + '-' + bookmark.choice[2] + '-' + bookmark.choice[1] +'.png')">
        </td>
      </tr>
      <tr>
        <th>タグ</th>
        <td>{{ bookmark.tag }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "CheckInput",
  setup() {
    const store = useStore();
    const bookmark = store.getters.bookmark;

    return {
      bookmark
    };
  }
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>