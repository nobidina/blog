<template>
  <ul class="album">
    <li class="album__item" v-for="item in album" :key="item.title">
      <img class="album__img" :src="item.img" :srcSet="item.srcSet" :alt="item.alt">
      <span class="album__title">
        {{ item.title }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Album',

  props: {
    album: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";

.album {
  
}

</style>
