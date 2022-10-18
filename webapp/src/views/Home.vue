<template>
  <div class="home">
    <h1>Home</h1>
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

</style>