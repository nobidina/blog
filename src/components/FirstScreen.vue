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
import NaturalLandscape from '@/components/drawings/NaturalLandscape';

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
  margin-bottom: 10vh;

  &__title {
    padding-right: 30px;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #eae7e0;

    @media @tablet {
      font-size: 4vh;
    }

    @media @desktop {
      font-size: 5vh;
    }
  }
}

</style>
