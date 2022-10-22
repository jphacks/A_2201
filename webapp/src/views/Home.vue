<template>
  <div class="home">
    <h1>ブックマーク管理アプリ「Zoo Saver」へようこそ！</h1>

    <router-link to="/create">
      <input class="button is-primary create-room-button" type="button" value="部屋を作る" />
    </router-link>
    <router-link to="/join">
      <input class="button is-primary search-room-button" type="button" value="部屋を探す" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.create-room-button {
  margin: 20px;
}

.search-room-button {
  margin: 20px;
}
</style>