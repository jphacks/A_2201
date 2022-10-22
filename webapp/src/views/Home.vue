<template>
  <div class="home">
    <h1>ZooSaverへようこそ！</h1>
    <p>ZooSaverはブックマークを管理するアプリです。</p>
    <p>個人やチームで部屋を作成し、部屋ごとにブックマークを管理できます！</p>
    <router-link to="/create">
      <input class="button is-primary" type="button" value="部屋を作る" />
    </router-link>
    <router-link to="/join">
      <input class="button is-primary" type="button" value="部屋を探す" />
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