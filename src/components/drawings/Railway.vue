<template>
  <div class="railway"  :class="{ 'railway--reverse': reverse }">
    <div class="train">
      <div class="train__wagon">
        <div class="train__window"  :class="{ 'train__window--1-reverse': reverse }"></div>
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
  name: 'Railway',

  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
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
  animation: train 4s cubic-bezier(.38,.54,.79,.64) infinite;

  @media @tablet {
    animation-duration: 6s;
  }

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
    bottom: -1vw;
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    background: #9b9183;

    @media @tablet {
      bottom: -0.5vw;
      width: 1vw;
      height: 1vw;
    }

    &--1 {
      left: 0.2vw;
    }

    &--2 {
      left: 2.3vw;

      @media @tablet {
        left: 1.3vw;
      }
    }

    &--3 {
      right: 0.2vw;
    }

    &--4 {
      right: 2.3vw;

      @media @tablet {
        right: 1.3vw;
      }
    }
  }

  &__window {
    width: 38%;
    height: 55%;
    background: #2f4c58;
  }
}

.railway--reverse {  
  & .train {
    animation: train-reverse 4s cubic-bezier(.38,.54,.79,.64) infinite;
    animation-direction: reverse;

    @media @tablet {
      animation-duration: 6s;
    }
  }

  & .train__wagon {
    &:first-child {
      border-top-left-radius: 65%;
    }

    &:last-child {
      border-top-right-radius: 0;
    }
    
    & .train__window--1 {
      position: relative;
      right: 0;
      width: 38%;
      border-top-right-radius: 0;
    }

    & .train__window--1-reverse {
      position: relative;
      left: -5%;
      width: 42%;
      border-top-left-radius: 65%;
    }
  }
}

@keyframes train {
  0% {
    left: -120%;
  }
  100% {
    left: 150%;
  }
}

@keyframes train-reverse {
  0% {
    left: -180%;
  }
  100% {
    left: 120%;
  }
}

</style>
