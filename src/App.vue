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
@import 'assets/styles/all.css';
@import 'assets/styles/font-awesome-animation.min.css';

#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
