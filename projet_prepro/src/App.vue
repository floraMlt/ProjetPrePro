<template>
  <div id="app">
    <router-view name="default" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
body {
  height: 100vh;
  width: 100vw;
}
h1, h2, p {
  margin: 0;
}
</style>
