<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  font-size: 14px;
}
*{
  margin: 0;
  padding: 0;
}
img {
  display: block;
  margin: 0 auto;
}
input[type='file']{
  outline: none;
  margin-top: 20px;
}
a{
  text-decoration: none
}
</style>
