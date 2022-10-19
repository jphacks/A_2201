<template>
  <div class="join_room">
    <h1>部屋に入る</h1>
    <p>参加したい部屋の名前を教えてください！</p>
    <div class="container is-max-desktop">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="参加したい部屋の名前を入力してください">
        </div>
        <div class="control">
          <router-link to="/join/bookmark">
            <a class="button is-info">
              参加する！
            </a>
          </router-link>
        </div>
      </div>
    </div>
    <p>エラー文はここ</p>
  </div>
</template>

<script>
export default {
  name: "JoinRoom"
}
</script>

<style scoped>

</style>