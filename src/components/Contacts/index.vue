<template>
  <div class="contacts">
    <a class="contacts__link" target="_blank" v-for="item in contacts" :key="item.icon" :class="'contacts__link--' + item.icon" :href="item.link"></a>
  </div>
</template>

<script>
export default {
  name: 'Contacts',

  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

.contacts {
  display: flex;

  @media @desktop {
    justify-content: center;
  }

  &__link {
    display: block;
    width: 35px;
    height: 30px;
    margin-right: 15px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    @media @tablet {
      transition: transform .1s ease;
      width: 45px;
      height: 40px;
      margin-right: 15px;
    }

    @media @desktop {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }

    &--facebook {
      background-image: url("./img/facebook.svg");
    }

    &--instagram {
      background-image: url("./img/instagram.svg");
    }

    &:hover {
      @media @tablet {
        transform: scale(1.07);
      }
    }
  }
}

</style>
