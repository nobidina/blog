<template>
  <div class="album">
    <ul class="album__list">
      <li class="album__item" v-for="item in album" :key="item.title">
        <img class="album__img" :src="item.img" :srcSet="item.srcSet" :alt="item.alt">
        <span class="album__title">
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
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";

.album {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__list {
    @media @tablet {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 5vw;
      width: 100%;
      margin-bottom: 5vw;
    }
  }

  &__item {
    position: relative;
    width: 100%;
    min-height: 340px;
    margin-bottom: 30px;
    border-radius: 3px;
    background-color: #3c5b74;

    @media @tablet {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      @media @tablet {
        place-self: center;
        width: 80%;
        min-height: 240px;
      }
    }

    &:nth-child(5n + 1) {
      transform: rotateZ(-2deg);
    }

     &:nth-child(4n + 4) {
      transform: rotateZ(2deg);
     }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 7px;
      height: 27%;
      border-radius: 1px;
      background-color: #ac9676;
    }

    &::before {
      top: 0;
      right: 0;
      transform: rotateZ(-45deg) translate(1px, -20px);
    }

    &::after {
      bottom: 0;
      left: 0;
      transform: rotateZ(-45deg) translate(1px, 20px);
    }
  }

  &__title {
    position: absolute;
    bottom: 20%;
    right: 0;
    display: flex;
    max-width: 60%;
    padding: 5px 15px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #eae7e0;
  }

  &__button {
    padding: 10px 5vw;
    border-radius: 3px;
    background-color: #ac9676;
    font-family: @font-family-main;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5em;
    color: @font-color;
    transform: rotateZ(-2deg);
  }
}

</style>
