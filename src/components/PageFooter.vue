<template>
  <footer class="page-footer">
    <city />
    <div class="page-footer__contacts-wrapper">
      <social-links class="page-footer__social-links" />
      <railway class="page-footer__railway" />
    </div>
  </footer>
</template>

<script>
import City from '@/components/landscapes/City';
import Railway from '@/components/landscapes/Railway';
import SocialLinks from '@/components/SocialLinks';

export default {
  name: 'PageFooter',

  components: {
    City,
    Railway,
    SocialLinks
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/mixins.less";

.page-footer {
  .container();
  overflow: hidden;

  &__contacts-wrapper {
    position: relative;
  }

  &__railways {
    position: absolute;
    top: 0;
    left: 0;
  }
}

</style>
