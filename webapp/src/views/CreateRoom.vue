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
const _roomRef = db.collection('room');

export default {
  name: "CreateRoom",
  setup() {
    const router = useRouter();
    const room = reactive({
      id: '1',
      name: ''
    })

    const addRoom = async () => {
      await roomRef.where("name", "==", room.name).get()
          .then(query => {
            console.log(query);
            if (query.docs.length !== 0) {
              console.log("既にその部屋はあります！");
            } else {
              _roomRef.add({name: room.name})
                  .then(res => {
                    console.log("ルーム「" + room.name + "」の作成に成功しました！");
                    router.push({path: `/room/${res.id}`});
                  })
                  .catch(() => {
                    console.log("ルーム「" + room.name + "」の作成に失敗しました！");
                  });
            }
          })
          .catch(() => {
            console.log("ルームの取得に失敗しました！");
          });
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
