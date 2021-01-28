<template>
  <header class="page-header">
  <router-link class="page-header__link" :class="{ 'page-header__link--disabled' : links.prevPage === '' }" :to="links.prevPage">
      <svg class="page-header__arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 51 23" fill="none">
        <path d="M18.1352 16.6603C18.1352 16.6603 36.1424 18.0713 44.1423 18.0318C52.1421 17.9922 50.8213 4.76668 47.0607 1.51715C43.8803 -1.08703 30.7265 4.90306 18.0907 7.66043C18.0907 7.66043 19.061 1.65556 18.061 1.6605C17.061 1.66545 -0.894227 10.7543 0.110685 11.7494C1.1156 12.7444 17.1624 22.1652 18.1648 22.6602C19.1673 23.1553 18.1352 16.6603 18.1352 16.6603Z" fill="#AC9676"/>
      </svg>
    </router-link>
    <router-link to="/">
      <album />
    </router-link>
    <router-link class="page-header__link" :class="{ 'page-header__link--disabled': links.nextPage === '' }" :to="links.nextPage">
      <svg class="page-header__arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 51 23" fill="none">
        <path d="M32 7C32 7 14 5.5 6 5.5C-1.99998 5.5 -0.744578 18.7319 3 22C6.16747 24.6199 19.3507 18.6949 32 16C32 16 31 22 32 22C33 22 51 13 50 12C49 11 33 1.5 32 1C31 0.5 32 7 32 7Z" fill="#AC9676"/>
      </svg>
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
    links: {
      type: Object,
      required: true
    }
  }
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

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    @media @tablet {
      width: 60px;
    }

    &--disabled {
      opacity: 0.5;
    }
  }

  &__arrow {
    @media @tablet {
      width: 40px;
    }

    @media @tablet {
      width: 45px;
    }
  }
}

</style>
