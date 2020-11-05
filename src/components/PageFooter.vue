<template>
  <footer class="page-footer">
    <city />
    <div class="page-footer__contacts-wrapper">
      <contacts class="page-footer__contacts" :contacts="contacts" />
      <railway class="page-footer__railway" :reverse="reverse" />
    </div>
  </footer>
</template>

<script>
import City from '@/components/landscapes/City';
import Railway from '@/components/landscapes/Railway';
import Contacts from '@/components/Contacts';

export default {
  name: 'PageFooter',

  components: {
    City,
    Railway,
    Contacts
  },

  props: {
    contacts: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    reverse: true
  })
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
    display: flex;
    align-items: center;
  }

  &__contacts {
    margin-right: 45px;
    margin-left: 45px;
  }

  &__railway {
    position: reverse;
  }
}

</style>
