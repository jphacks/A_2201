<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/create">Create</router-link> |
  <router-link to="/join">Join</router-link> |
  <router-link to="/join/bookmark">Bookmark</router-link>
  <router-view/>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
