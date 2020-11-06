<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, 'Helvetica Neue', Helvetica;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #464c5b;
  margin-top: 0px;
  background: #eee;
  height: 100%;
}
</style>
