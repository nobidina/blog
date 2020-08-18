<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

@import "less/variables.less";
@import "less/reset.less";

html, body {
  margin: 0;
  height: 100%;
  min-height: 100%;
}

#app {
  min-height: 100%;
  font-family: @font-family-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5em;
  color: @font-color;
}
</style>
