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
          <router-link to="/join/bookmark">
            <a class="button is-info" @click="addRoom">
              作成
            </a>
          </router-link>
        </div>
      </div>
    </div>
    <p>エラー文はここ</p>
  </div>
</template>

<script>
import {reactive} from "vue";
import Api from "@/Api";

export default {
  name: "CreateRoom",
  setup() {
    const room = reactive({
      id: '',
      name: ''
    })

    const addRoom = () => {
      Api.post('/room',
          {
            fields: {
              name: {
                stringValue: room.name
              }
            }
          }
      )
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