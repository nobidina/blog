<template>
  <section class="first-screen">
    <natural-landscape>
      <h1 class="first-screen__title">
        {{ title }}
      </h1>
    </natural-landscape>
  </section>
</template>

<script>
import NaturalLandscape from '@/components/landscapes/NaturalLandscape';

export default {
  name: 'FirstScreen',

  components: {
    NaturalLandscape
  },

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";

.first-screen {
  &__title {
    padding-left: 15px;
    font-size: 4vh;
    line-height: 1em;
    color: #eae7e0;

    @media @desktop {
      font-size: 5vh;
    }
  }
}

</style>
