<template>
  <div class="bookmark_list">
    <h1>{{ room }}</h1>
    <table class="table is-fullwidth">
      <tr>
        <th class="has-text-centered">タイトル</th>
        <th class="has-text-centered">検索ワード</th>
        <th class="has-text-centered">アイコン</th>
        <th class="has-text-centered"></th>
        <th class="has-text-centered"></th>
        <th class="has-text-centered"></th>
      </tr>
      <tr>
        <th class="has-text-centered">Vue.jsおすすめライブラリ１０選！</th>
        <th class="has-text-centered">Vue.js ライブラリ 簡単</th>
        <th class="has-text-centered">🐶</th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Info
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Edit
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Delete
          </button>
        </th>
      </tr>
      <tr>
        <th class="has-text-centered">Vue.jsのすゝめ</th>
        <th class="has-text-centered">Vue.js ライブラリ 簡単</th>
        <th class="has-text-centered">🐱</th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Info
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Edit
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Delete
          </button>
        </th>
      </tr>
      <tr>
        <th class="has-text-centered">Vue.jsの開発環境を構築</th>
        <th class="has-text-centered">Vue.js 始め方</th>
        <th class="has-text-centered">🦊</th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Info
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Edit
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Delete
          </button>
        </th>
      </tr>
      <tr>
        <th class="has-text-centered">Quarkus 入門</th>
        <th class="has-text-centered">Quarkus 始め方</th>
        <th class="has-text-centered">🐠</th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Info
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Edit
          </button>
        </th>
        <th class="has-text-centered">
          <button class="button is-small is-primary">
            Delete
          </button>
        </th>
      </tr>
    </table>
    <button class="button is-small is-primary">
      + add bookmark
    </button>
  </div>
</template>

<script>
import Api from '../Api';

export default {
  name: "BookmarkList",
  data() {
    return {
      room: "",
    }
  },
  mounted() {
    Api.get('/room',(room) => this.room = room);
  }
}
</script>

<style scoped>

</style>