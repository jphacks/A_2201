<template>
  <div class="add_bookmark">
    <h1>ブックマーク追加</h1>

    <p>Step{{stepNumber}}</p>
    <div v-if="stepNumber==1">
    <InputURL/>
    </div>
    <div v-if="stepNumber==2">
    <InputSearchWords/>
    </div>
    <div v-if="stepNumber==3">
    <InputAbstract/>
    </div>
    <div v-if="stepNumber==4">
    <InputReason/>
    </div>
    <div v-if="stepNumber==5">
    <InputParam/>
    </div>
    <div v-if="stepNumber==6">
    <InputTag/>
    </div>
    <button
      v-if="stepNumber!=1"
      class="button is-info"
      type="button"
      @click="backStep"
    >
      戻る
    </button>
    <button
      v-if="stepNumber!=6"
      class="button is-info"
      type="button"
      @click="nextStep"
      :disabled="!store.getters.is_valid_url"
    >
      次へ
    </button>
  </div>
  <div v-if="stepNumber==6">
    <input class="button is-info" type="button" value="ブックマークを登録する" @click="modalAction"/>
    <!-- ここからモーダルウィンドウ -->
    <div :class="modal_flag ? 'modal is-active': 'modal'">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">以下の内容で登録しますか？</p>
          <button class="delete" aria-label="close" @click="modalAction"></button>
        </header>
        <section class="modal-card-body">
          <CheckInput class="content" />
        </section>
        <footer class="modal-card-foot">
          <router-link :to="{ name: 'BookmarkList' }">
            <input class="button is-success" type="button" value="登録する" @click="postBookmark" />
          </router-link>
          <button class="button" @click="modalAction">戻る</button>
        </footer>
      </div>
    </div>
    <!-- ここまでモーダルウィンドウ -->
  </div>
</template>

<script>

import InputURL from "@/components/InputURL";
import InputSearchWords from "@/components/InputSearchWords";
import InputParam from "@/components/InputParam";
import InputAbstract from "@/components/InputAbstract";
import InputReason from "@/components/InputReason";
import CheckInput from "@/components/CheckInput";
import { ref, onMounted, onUnmounted, reactive } from "vue";
import InputTag from "@/components/InputTag";
import { useStore } from "vuex";
import db from "../firebase/firestore";

const bookmarkRef = db.collection('bookmark');

export default {
  name: "AddBookmark",

  components: {
    InputTag,
    InputReason,
    InputAbstract,
    InputParam,
    InputSearchWords,
    InputURL,
    CheckInput
  },

  setup(){
    const store = useStore();
    const room = reactive({
      id: '',
      name: ''
    })

    const modal_flag = ref(false);

    const stepNumber = ref(1);
    const backStep =() =>{
      stepNumber.value--;
      console.log(store.getters.bookmark);
    }
    const nextStep =() =>{
      stepNumber.value++;
      console.log(store.getters.bookmark);
    }

    const modalAction = () => {
      modal_flag.value = !modal_flag.value;
    }

    const postBookmark = () => {
      const bookmark = store.getters.bookmark;

      bookmarkRef.doc(bookmark.title).set({
        id: room.id,
        url: bookmark.url,
        title: bookmark.title,
        search_word: bookmark.search_word,
        summary: bookmark.summary,
        reason: bookmark.reason,
        choice: bookmark.choice,
        tag: bookmark.tag
      }).then(() =>{
        console.log("ブックマーク「" + bookmark.title + "」の作成に成功しました！");
      }).catch(() => {
        console.log("エラー！！！")
        console.log("ブックマーク「" + bookmark.title + "」の作成に失敗しました！");
      })
    }

    onMounted(() => {
      room.id = store.getters.room_id;
    })

    onUnmounted(() => {
      console.log("unmounted");
      store.dispatch("initBookmark");
    })

    return{
      stepNumber,
      backStep,
      nextStep,
      modal_flag,
      modalAction,
      postBookmark,
      store
    }
  },
}
</script>

<style scoped>

</style>