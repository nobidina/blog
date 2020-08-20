<template>
  <section class="custom-section">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'CustomSection'
}
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/mixins.less";

.custom-section {
  .container();
}

</style>
