<template>
  <div class="join_room">
    <h1>部屋に入る</h1>
    <p>参加したい部屋の名前を教えてください！</p>
    <div class="container is-max-desktop">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="参加したい部屋の名前を入力してください" v-model="room.name">
        </div>
        <div class="control">
          <a class="button is-info" @click="joinRoom">
            参加する！
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {useRouter} from "vue-router"

import db from "../firebase/firestore"

const roomRef = db.collection('room');

export default {
  name: "JoinRoom",
  setup() {
    const router = useRouter();
    const room = reactive({
      name: ''
    })

    const joinRoom = async () => {
      if(room.name === "") {
        alert("※部屋名を入力してください");
        return;
      }
      const roomDoc = await roomRef.where("name", "==", room.name).get();
      if (roomDoc.docs.length !== 0)
        router.push({path: `/room/${roomDoc.docs[0].id}`});
      else
        alert("ルーム「" + room.name + "」は存在しません。入力ミスがないかご確認ください。");
        console.log("部屋がありません");
    }

    return {
      room,
      joinRoom
    }
  },
}
</script>

<style scoped>

</style>