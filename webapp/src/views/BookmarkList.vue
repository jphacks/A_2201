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
          <button class="button is-small is-primary" @click="showPopup(title)">
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
          <button class="button is-small is-primary" @click="showPopup(title)">
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
          <button class="button is-small is-primary" @click="showPopup(title)">
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
          <button class="button is-small is-primary" @click="showPopup(title)">
            Delete
          </button>
        </th>
      </tr>
    </table>
    <router-link :to="{ name: 'AddBookmark' }">
      <button class="button is-small is-primary">
        + add bookmark
      </button>
    </router-link>
  </div>
  <div class="popup">
    <div class="popup-inner">
      <p>登録したブックマークを削除します。よろしいですか？</p>
      <button class="button is-small is-primary" @click="deleteBookMark" style="background-color: red;">
        削除する
      </button>
      <button class="button is-small is-primary" @click="hidePopup">
        キャンセル
      </button>
    </div>
    <div class="black-background"></div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive, onMounted, ref } from "vue";

import db from "../firebase/firestore"
const roomRef = db.collection('room');

export default {
  name: "BookmarkList",
  setup() {
    const route = useRoute();
    const room = reactive({
      id: '',
      name: ''
    })

    onMounted(async () => {
      room.id = route.params.id;
      const roomDoc = await roomRef.doc(room.id).get();
      room.name = roomDoc.data().name;
    })

    const title = ref("ここにタイトルがはいる");

    const showPopup = (title) => {
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "visible";
      let p = popup.getElementsByTagName("p")[0];
      p.innerText = "登録されたブックマークを削除します。よろしいですか?\n\"" + title + "\"";
      this.delComment = title;
      // PCでのスクロール禁止
      document.addEventListener("mousewheel", this.scroll_control, {passive: false});
      // スマホでのタッチ操作でのスクロール禁止
      document.addEventListener("touchmove", this.scroll_control, {passive: false});
    }
    const hidePopup = () => {
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "hidden";
      this.delComment = null;
      // PCでのスクロール禁止解除
      document.removeEventListener("mousewheel", this.scroll_control, {passive: false});
      // スマホでのタッチ操作でのスクロール禁止解除
      document.removeEventListener('touchmove', this.scroll_control, {passive: false});
    }
    const deleteBookMark = () => {
      hidePopup();
    }

    return {
      room, showPopup, hidePopup, deleteBookMark, title
    }
  },
}
</script>

<style scoped>
.popup {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  visibility: hidden;
}

.popup-inner {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  padding: 50px;
  background-color: #fff;
  z-index: 2;
  text-align: center;
}

.black-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: 1;
  cursor: pointer;
}
</style>


