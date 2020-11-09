<template>
  <div class="album">

    <ul class="album__list">
      <li class="album__item" v-for="item in album" :key="item.title">
        <img class="album__img" :src="item.img" :srcSet="item.srcSet" :alt="item.alt" width='500' height='auto'>
        <span class="album__item-title">
          {{ item.title }}
        </span>
      </li>
    </ul>
    <button class="album__button" type="button">
      More
    </button>
  </div>
</template>

<script>
export default {
  name: 'Album',

  props: {
    album: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";

.album {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    width: 100%;
    margin-bottom: 30px;

    @media @tablet {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 8vh 2vw;
      place-items: start center;
      width: 100%;
      margin-bottom: 10vh;
    }
  }

  &__item {
    position: relative;
    margin-bottom: 30px;
    border-radius: 7px;
    border: 5px solid #ac9676;
    line-height: 0;
    transition: transform 0.2s;

    @media @tablet {
      width: 85%;
      margin-bottom: 0;
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
    right: 0;
    display: flex;
    max-width: 60%;
    padding: 2px 7px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    line-height: 1.5em;
    color: @white;
    background-color: #ac9676;
  }

  &__button {
    transition: transform 0.2s;
    width: 100%;
    padding: 10px 5vw;
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
    }

    &:hover {
      @media @tablet {
        transform: scale(1.05) rotateZ(-1deg);
      }
    }
  }
}

</style>
