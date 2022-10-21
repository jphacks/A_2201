<template>
  <div class="create_room">
    <h1>部屋の作成</h1>
    <p>部屋の名前を決めてください！</p>
    <div class="container is-max-desktop">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="作成したい部屋の名前を入力してください" v-model="room.name">
        </div>
        <div class="control">
          <a class="button is-info" @click="addRoom">
            作成
          </a>
        </div>
      </div>
    </div>
    <p>エラー文はここ</p>
  </div>
</template>

<script>
import {reactive} from "vue";
import {useRouter} from "vue-router"

import db from "../firebase/firestore"
const roomRef = db.collection('room');

export default {
  name: "CreateRoom",
  setup() {
    const router = useRouter();
    const room = reactive({
      id: '1',
      name: ''
    })

    const addRoom = () => {
      roomRef.doc(room.name).set({
        name: room.name
      }).then(() =>{
        console.log("ルーム「" + room.name + "」の作成に成功しました！");
      }).catch(() => {
        console.log("エラー！！！")
        console.log("ルーム「" + room.name + "」の作成に失敗しました！");
      })
      router.push({path: `/room/${room.name}`})
    }
    return {
      room,
      addRoom
    }
  },
}
</script>

<style scoped>

</style>
