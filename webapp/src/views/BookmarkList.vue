<template>
  <div class="bookmark_list">
    <h1>「{{ room.name }}」の部屋へようこそ</h1>
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th class="has-text-centered">タイトル</th>
        <th class="has-text-centered">検索ワード</th>
        <th class="has-text-centered">アイコン</th>
        <th class="has-text-centered"></th>
        <th class="has-text-centered"></th>
        <th class="has-text-centered"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(bookmark, index) in bookmarks" v-bind:key="bookmark.id">
        <td>{{ bookmark.title }}</td>
        <td>{{ bookmark.search_word }}</td>
        <td><img alt="animal"
                 :src="require('@/assets/'+ bookmark.choice[0] + '-' + bookmark.choice[2] + '-' + bookmark.choice[1] +'.png')">
        </td>
        <td class="has-text-centered">
          <button class="button is-small is-primary">
            Info
          </button>
        </td>
        <td class="has-text-centered">
          <button class="button is-small is-primary">
            Edit
          </button>
        </td>
        <td class="has-text-centered">
          <button class="button is-small is-primary" @click="showPopup(index)">
            Delete
          </button>
        </td>
      </tr>
      </tbody>
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
import {useStore} from "vuex";
import {useRoute} from 'vue-router'
import {reactive, onMounted, ref} from "vue";

import db from "../firebase/firestore"

const roomRef = db.collection('room');
const bookmarkRef = db.collection('bookmark');

export default {
  name: "BookmarkList",
  setup() {
    const store = useStore();
    const route = useRoute();
    const room = reactive({
      id: '',
      name: ''
    });
    let bookmarks = reactive([]);
    let delBookmarkTitle = ref(null);

    onMounted(async () => {
      room.id = route.params.id;
      const roomDoc = await roomRef.doc(room.id).get();
      room.name = roomDoc.data().name;
      await store.dispatch("setRoomName", room.name);
      await bookmarkRef.where("id", "==", room.id).get()
          .then(query => {
            query.forEach(bookmarkDoc => {
              bookmarks.push(bookmarkDoc.data())
            })
          })
          .catch(() => {
            console.log("ブックマークの取得に失敗しました!");
          });
    })

    const title = ref("ここにタイトルがはいる");

    const showPopup = (index) => {
      delBookmarkTitle.value = bookmarks[index].title;
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "visible";
      let p = popup.getElementsByTagName("p")[0];
      p.innerText = "登録されたブックマークを削除します。よろしいですか?\n\"" + delBookmarkTitle.value + "\"";
      // PCでのスクロール禁止
      document.addEventListener("mousewheel", this.scroll_control, {passive: false});
      // スマホでのタッチ操作でのスクロール禁止
      document.addEventListener("touchmove", this.scroll_control, {passive: false});
    }

    const hidePopup = () => {
      delBookmarkTitle.value = '';
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "hidden";
      // PCでのスクロール禁止解除
      document.removeEventListener("mousewheel", this.scroll_control, {passive: false});
      // スマホでのタッチ操作でのスクロール禁止解除
      document.removeEventListener('touchmove', this.scroll_control, {passive: false});
    }

    const deleteBookMark = () => {
      bookmarkRef.doc(delBookmarkTitle.value).delete()
          .then(() => {
            document.location.reload();
          }).catch(error => {
        console.log(error)
      })
      hidePopup();
    }

    return {
      room, bookmarks, showPopup, hidePopup, deleteBookMark, title
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


