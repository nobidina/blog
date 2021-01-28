<template>
  <div id="app">
    <router-view />
    <page-footer :contacts="contacts"/>
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter';

  export default {
    name: 'app',

    components: {
      PageFooter
    },

    data: () => ({
      contacts: [
        {
          link: "https://www.facebook.com/profile.php?id=100000435645436",
          icon: "facebook"
        },
        {
          link: "https://www.instagram.com/nadezda_obidina/",
          icon: "instagram"
        }
      ]
    })
  }
</script>

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
  font-size: 100%;
  line-height: 1.5em;
  color: @font-color;
  background-color: #fff;
}
</style>
