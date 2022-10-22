<template>
  <router-link to="/">
    <img alt="zoo-saver" src="./assets/zoo-saver.png">
  </router-link>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
