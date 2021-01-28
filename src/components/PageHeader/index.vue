<template>
  <header class="page-header">
    <router-link to="/">
      <album />    
    </router-link>
  </header>
</template>

<script>

import Album from '@/components/drawings/Album.vue';

export default {
  name: 'PageHeader',

  components: {
    Album
  },

  props: {
    
  },

  data: () => ({
    
  })
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  margin-bottom: 5vh;
  box-shadow: 0 0 2px 0 #a3acb1;
}

</style>
