<template>
  <article class="custom-article">
    {{ article }}
  </article>
</template>

<script>
export default {
  name: 'CustomArticle',

  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/mixins.less";

.custom-article {
  .container();
}

</style>
