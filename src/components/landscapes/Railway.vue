<template>
  <div class="railway">
    <div class="train">
      <div class="train__wagon">
        <div class="train__window"></div>
        <div class="train__window"></div>
        <div class="train__wheel  train__wheel--1"></div>
        <div class="train__wheel  train__wheel--2"></div>
        <div class="train__wheel  train__wheel--3"></div>
        <div class="train__wheel  train__wheel--4"></div>
      </div>
      <div class="train__wagon">
        <div class="train__window"></div>
        <div class="train__window"></div>
        <div class="train__wheel  train__wheel--1"></div>
        <div class="train__wheel  train__wheel--2"></div>
        <div class="train__wheel  train__wheel--3"></div>
        <div class="train__wheel  train__wheel--4"></div>
      </div>
      <div class="train__wagon">
        <div class="train__window"></div>
        <div class="train__window  train__window--1"></div>
        <div class="train__wheel  train__wheel--1"></div>
        <div class="train__wheel  train__wheel--2"></div>
        <div class="train__wheel  train__wheel--3"></div>
        <div class="train__wheel  train__wheel--4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Railway'
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.railway {
  overflow: hidden; 
  box-sizing: border-box;
  width: 75vw;
  height: 8vh;
  border-bottom: 2px solid #a3acb1;
  border-left: 2px solid #3a1c17;
}

.train {
  position: absolute;
  bottom: 1vh;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  animation: train 6s cubic-bezier(.38,.54,.79,.64) infinite;

  &__wagon {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100px;
    width: 8vw;
    height: 6vh;
    margin-right: 5px;
    background: #a3acb1;

    &:last-child {
      margin-right: 0;
      border-top-right-radius: 65%;

      & .train__window--1 {
        position: relative;
        right: -5%;
        width: 42%;
        border-top-right-radius: 65%;
      }
    }
  }

  &__wheel {
    position: absolute;
    bottom: -1vh;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    background: #9b9183;

    &--1 {
      left: 0.2vw;
    }

    &--2 {
      left: 1.3vw;
    }

    &--3 {
      right: 0.2vw;
    }

    &--4 {
      right: 1.3vw;
    }
  }

  &__window {
    width: 38%;
    height: 55%;
    background: #2f4c58;
  }
}

@keyframes train {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}

</style>
