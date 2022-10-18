<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/create">Create</router-link> |
  <router-link to="/join">Join</router-link> |
  <router-link to="/join/bookmark">Bookmark</router-link> |
  <router-link to="/join/bookmark/add">AddBookmark</router-link>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
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
  margin-top: 60px;
}
</style>
