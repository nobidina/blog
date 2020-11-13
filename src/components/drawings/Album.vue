<template>
  <div class="album">
    <div class="album__spine"></div>
    <div class="album__cover">
      <div class="album__photo">
        <div class="album__moon"></div>
        <div class="album__mountain  album__mountain--small"></div>
        <div class="album__mountain  album__mountain--big"></div>
      </div>
      <h4 class="album__title">
        My adventures
      </h4>
    </div>
    <div class="album__pages"></div>
  </div>
</template>

<script>
export default {
  name: 'Album'
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.album {
  position: relative;
  width: 50px;
  height: 60px;
  margin: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 1px 0px 3px -1px #a3acb1;
  background-color: #ac9676;

  &__spine {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #a3acb1;
  }

  &__cover {
    position: absolute;
    top: 20%;
    right: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    height: 40%;
  }

  &__photo {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 80%;
    border-radius: 1px;
    background-color: #00243f;
  }

  &__title {
    width: 100%;
    height: 1px;
    border-radius: 1px;
    text-align: center;
    font-size: 2px;
    line-height: 2.5px;
    color: #fff;
  }

  &__moon {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: #f9f6de;
  }

  &__mountain {
    position: absolute;
    bottom: 0;
    border-left: 7px solid transparent;
    border-bottom: solid #fff;
    border-right: 7px solid transparent;

    &--small {
      left: -2px;
      border-bottom-width: 7px;
    }
    &--big {
      left: 7px;
      border-bottom-width: 10px;
    }
  }

  &__pages {
    position: absolute;
    z-index: 1;
    bottom: 1px;
    right: 0px;
    width: 99%;
    height: 20%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
  }
}

</style>
