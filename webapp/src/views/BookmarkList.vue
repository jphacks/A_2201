<template>
  <div class="bookmark_list">
    <h1>「{{ room.name }}」の部屋へようこそ</h1>
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
    <router-link to="/join/bookmark/add">
      <button class="button is-small is-primary">
        + add bookmark
      </button>
    </router-link>
  </div>
</template>

<script>
import Api from '../Api';
import {reactive, onMounted} from "vue";

export default {
  name: "BookmarkList",
  setup() {
    const room = reactive({
      id: '',
      name: ''
    })

    onMounted(() => {
      Api.get('/room', (_room) => {
        room.id = _room[0].id;
        room.name = _room[0].fields.name.stringValue,
        room.updateTime = _room[0].updateTime
      })
    })

    return {
      room
    }
  },
}
</script>

<style scoped>

</style>


