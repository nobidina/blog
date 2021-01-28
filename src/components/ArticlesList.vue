<template>
  <div class="articles-list">

    <ul class="articles-list__list">
      <li class="articles-list__item" v-for="item in actualList" :key="item.title" @click="$router.push({ path: `/article/${item.id}` })">
        <img class="articles-list__img" :src="item.img" :srcSet="item.srcSet" :alt="item.alt" width='500' height='auto'>
        <span class="articles-list__item-title">
          {{ item.title }}
        </span>
      </li>
    </ul>
    <button class="articles-list__button"  type="button" v-if="isButtonMore" @click="showMoreItems">
      More
    </button>
  </div>
</template>

<script>
export default {
  name: 'ArticlesList',

  props: {
    list: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      default: ''
    }
  },

  data: function () {
    return {
      actualList: this.list,
      firstStep: 6,
      step: 3
    }
  },

  computed: {
    isButtonMore() {
      if (this.list.length > this.firstStep && this.actualList.length != this.list.length) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    getStartList() {
     return this.actualList.slice(0, this.firstStep);
    },

    showMoreItems() {
      const actualListLength = this.actualList.length;
      const listLength = this.list.length;

      if (actualListLength === listLength) {
        return this.actualList;
      } else {
        for (let i = actualListLength; i < actualListLength + this.step; i++) {
          if (i === listLength) {
            break;
          } else {
            this.actualList.push(this.list[i]);
          }
        }
      }
    }
  },

  created() {
    this.actualList = this.getStartList()
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/mixins.less";

.articles-list {
  .container();
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    width: 100%;

    @media @tablet {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 8vh 2vw;
      place-items: start center;
      width: 100%;
    }
  }

  &__item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    border-radius: 7px;
    border: 4px solid #ac9676;
    line-height: 0;
    transition: transform 0.2s;

    @media @tablet {
      width: 90%;
      margin-bottom: 0;
    }

    @media @tablet {
      width: 85%;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      @media @tablet {
        transform: scale(1.05) rotateZ(1deg);
      }
    }

    &:nth-child(3n + 1) {
      &:hover {
        @media @tablet {
          transform: scale(1.05) rotateZ(-1deg);
        }
      }
    }

    &:nth-child(3n + 3) {
      &:hover {
        @media @tablet {
          transform: scale(1.05) rotateZ(1deg);
        }
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__item-title {
    position: absolute;
    bottom: 15%;
    right: 3vw;
    display: flex;
    max-width: 60%;
    padding: 2px 2vw;
    border-radius: 5px;
    line-height: 1.5em;
    background-color: #ac9676;
    color: #fff;

    @media @tablet {
      right: 5px;
      padding-right: 7px;
      padding-left: 7px;
    }
  }

  &__button {
    cursor: pointer;
    transition: transform 0.2s;
    min-width: 200px;
    width: 100%;
    margin-top: 5vh;
    padding: 1.3vh 5vw;
    border-radius: 3px;
    background-color: #ac9676;
    font-family: @font-family-main;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5em;
    color: @white;

    @media @tablet {
      width: auto;
      margin-top: 7vh;
      padding-top: 1vh;
      padding-bottom: 1vh;
    }

    &:hover {
      @media @tablet {
        transform: scale(1.05) rotateZ(-1deg);
      }
    }
  }
}

</style>
