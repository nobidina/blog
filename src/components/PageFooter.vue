<template>
  <footer class="page-footer">
    <div class="page-footer__text-wrapper">
      <p class="page-footer__text">
        If you want to know me better feel free to follow me in social media. I'd happy to meet you.
      </p>
      <city class="page-footer__city" />
    </div>
    <div class="page-footer__contacts-wrapper">
      <contacts class="page-footer__contacts" :contacts="contacts" />
      <railway class="page-footer__railway" :reverse="reverse" />
    </div>
  </footer>
</template>

<script>
import City from '@/components/drawings/City';
import Railway from '@/components/drawings/Railway';
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
  overflow: hidden;
  padding-top: 0;

  @media @tablet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0;
  }

  @media @desktop {
    padding-top: 0;
  }

  &__text-wrapper {
    .container();
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    font-size: 3vh;
    line-height: 1.5em;

    @media @tablet {
      order: 1;
      margin-left: 5vw;
      margin-right: 0;
    }

    @media @desktop {
      font-size: 4vh;
      order: 0;
      margin-left: 0;
      margin-right: 5vw;
    }
  }

  &__city {
    display: none;

    @media @tablet {
      order: 0;
      display: flex;
    }

    @media @desktop {
      order: 1;
    }
  }

  &__contacts-wrapper {
    .container();
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 50px;

    @media @tablet {
      min-height: 75px;
    }
  }

  &__railway {
    position: absolute;
    right: 0;
    width: calc(100vw - 7vw - 110px);

    @media @tablet {
      width: calc(100vw - 5vw - 140px);
    }

    @media @desktop {
      width: calc(100vw - 10vw - 150px);
    }
  }
}

</style>
