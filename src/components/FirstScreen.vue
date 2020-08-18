<template>
  <div class="first-screen">
    <div class="scape">
      <div class="scape__sky">
        <div class="scape__moon"></div>
        <div class="scape__star  scape__star--1"></div>
        <div class="scape__star  scape__star--2"></div>
        <div class="scape__star  scape__star--3"></div>
        <div class="scape__bird  scape__bird--1"></div>
        <div class="scape__bird  scape__bird--2"></div>
        <div class="scape__bird  scape__bird--3"></div>
        <h1 class="scape__title">A space for your title</h1>
      </div>
      <div class="scape__sea">
        <div class="scape__mountain  scape__mountain--1"></div>
        <div class="scape__mountain  scape__mountain--2"></div>
        <div class="scape__railway">
          <div class="scape__train">
            <div class="scape__wagon">
              <div class="scape__window"></div>
              <div class="scape__window"></div>
              <div class="scape__wheel  scape__wheel--1"></div>
              <div class="scape__wheel  scape__wheel--2"></div>
              <div class="scape__wheel  scape__wheel--3"></div>
              <div class="scape__wheel  scape__wheel--4"></div>
            </div>
            <div class="scape__wagon">
              <div class="scape__window"></div>
              <div class="scape__window"></div>
              <div class="scape__wheel  scape__wheel--1"></div>
              <div class="scape__wheel  scape__wheel--2"></div>
              <div class="scape__wheel  scape__wheel--3"></div>
              <div class="scape__wheel  scape__wheel--4"></div>
            </div>
            <div class="scape__wagon">
              <div class="scape__window"></div>
              <div class="scape__window  scape__window--1"></div>
              <div class="scape__wheel  scape__wheel--1"></div>
              <div class="scape__wheel  scape__wheel--2"></div>
              <div class="scape__wheel  scape__wheel--3"></div>
              <div class="scape__wheel  scape__wheel--4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstScreen'
}
</script>

<style scoped lang="less">
@import "../less/variables.less";

.scape {
  position: relative;
  width: 100%;
  height: 100vh;

  &__title {
    position: absolute;
    top: 43vh;
    left: 25vw;
    max-width: 70vw;
    padding-left: 15px;
    font-size: 4vh;
    line-height: 1em;
    color: #eae7e0;

    @media @tablet {
      top: auto;
      bottom: 55vh;
    }

    @media @desktop {
      top: 37vh;
      bottom: auto;
      left: 40vw;
      max-width: 50vw;
      font-size: 5vh;
    }
  }

  &__sky {
    height: 80vh;
    background-color: #00243f;

    @media @desktop {
      height: 70vh;
    }
  }

  &__moon {
    position: absolute;
    top: 5vh;
    right: 5vh;
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-color: #f9f6de;
    box-shadow: 12px 0px 0px 0px #fcf3b5, 
                0px 16px 0px 0px #fee970,
                -15px 4px 0px 0px #fcf3b5,
                0px -16px 0px 0px #fee970,
                -11px 11px 0px 0px #fcf3b5,
                16px -9px 0px 0px #fbda57,
                17px 9px 0px 0px #fbc11a,
                -14px -15px 0px 0px #fbda57,
                11px 17px 0px 0px #fbc11a;
    animation: moon 4s ease-in-out infinite;

    @media @desktop {
      right: auto;
      left: 5vh;
      width: 18vh;
      height: 18vh;
    }
  }

  &__star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    transform: rotateZ(25deg);
    background-color: #ffffff;
    box-shadow: 0 0 8px 4px #ffffff;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 1px;
      opacity: 0.5;
      background-color: #ffffff;
      box-shadow: 0 0 5px 0 #ffffff;
    }

    &:after {
      transform: translateX(-14px) rotateZ(50deg);
    }

    &:before {
      transform: translateX(-13px) rotateZ(-50deg);
    }

    &--1 {
      top: 10vh;
      left: 18vw;
      width: 5px;
      height: 5px;
      box-shadow: 0 0 8px 6px #ffffff;
      animation: stars 4s infinite;

      @media @desktop {
        left: 30vw;
      }

      &::after,
      &::before {
        content: "";
        width: 40px;
      }

      &:after {
        transform: translateX(-19px) rotateZ(50deg);
      }

      &:before {
        transform: translate(-17px, 2px) rotateZ(-50deg);
      }
      
    }

    &--2 {
      top: 36vh;
      left: 12.5vw;
      animation: stars 4s 2s infinite;
    }

    &--3 {
      top: 28vh;
      left: 35vw;
      animation: stars 4s 3s infinite;

      @media @tablet {
        top: 32vh;
        left: 4vw;
      }
    }
  }

  &__bird {
    @media @desktop {
      position: absolute;
      top: 17vh;
      right: -13vw;
      transform: rotateZ(36deg);
      border-right: 7px solid transparent;
      border-bottom: 120px solid #ac9676;
      border-left: 7px solid transparent;
    }

    &::after {
      @media @desktop {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-right: 7px solid transparent;
        border-bottom: 120px solid #ac9676;
        border-left: 7px solid transparent;
        transform: translate(-39px, 105px) rotateZ(-146deg);
      }
    }

    &--1 {
      @media @desktop {
        animation: birds 6s ease-in-out infinite;
      }
    }

    &--2 {
      @media @desktop {
        animation: birds 6s 1.5s ease-in-out infinite;
      }
    }

    &--3 {
      @media @desktop {
        animation: birds 6s 3s ease-in-out infinite;
      }
    }
  }

  &__sea {
    height: 20vh;
    background-color: #3c5b74;

    @media @desktop {
      height: 30vh;
    }
  }

  &__mountain {
    position: absolute;
    bottom: 0;
    display: inline-block;

    &--1 {
      left: -35vw;
      border-right: 50vw solid transparent;
      border-bottom: 53vh solid #eae7e0;
      border-left: 50vw solid transparent;

      @media @desktop {
        left: -12vw;
        border-right: 20vw solid transparent;
        border-bottom: 53vh solid #eae7e0;
        border-left: 20vw solid transparent;
      }

      &::after {
        @media @desktop {
          content: "";
          position: absolute;
          top: 0vh;
          left: 1.5vw;
          display: inline-block;
          border-right: 0vw solid transparent;
          border-bottom: 23vh solid #a3acb1;
          border-left: 5vw solid transparent;
          transform: rotateZ(128deg);
        }
      }
    }

    &--2 {
      @media @desktop {
        left: 6vw;
        border-right: 25vw solid transparent;
        border-bottom: 67vh solid #eae7e0;
        border-left: 25vw solid transparent;
      }

      &::after {
        @media @desktop {
          content: "";
          position: absolute;
          top: 0vh;
          left: 1.5vw;
          display: inline-block;
          border-right: 0vw solid transparent;
          border-bottom: 20vh solid #a3acb1;
          border-left: 5vw solid transparent;
          transform: rotateZ(128deg);
        }
      }
    }
  }

  &__railway {
    position: absolute;
    top: 75vh;
    left: 25vw;
    overflow: hidden; 
    box-sizing: border-box;
    width: 75vw;
    height: 8vh;
    border-bottom: 2px solid #a3acb1;
    border-left: 2px solid #3a1c17;

    @media @desktop {
      top: 65vh;
      left: 40vw;
      width: 60vw;
    }
  }

  &__train {
    position: absolute;
    bottom: 1vh;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    animation: train 6s cubic-bezier(.38,.54,.79,.64) infinite;
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

      & .scape__window--1 {
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

@keyframes moon {
  0% {
    box-shadow: 12px 0px 0px 0px #fcf3b5, 
                0px 16px 0px 0px #fee970,
                -15px 4px 0px 0px #fcf3b5,
                0px -16px 0px 0px #fee970,
                -11px 11px 0px 0px #fcf3b5,
                16px -9px 0px 0px #fbda57,
                17px 9px 0px 0px #fbc11a,
                -14px -15px 0px 0px #fbda57,
                11px 17px 0px 0px #fbc11a;
  }
  25% {
    box-shadow: 12px 5px 0px 0px #fcf3b5, 
                -5px 16px 0px 0px #fee970, 
                -15px -1px 0px 0px #fcf3b5, 
                5px -16px 0px 0px #fee970, 
                -11px 7px 0px 0px #fcf3b5, 
                16px -4px 0px 0px #fbda57, 
                17px 14px 0px 0px #fbc11a, 
                -12px -12px 0px 0px #fbda57, 
                5px 18px 0px 0px #fbc11a;
  }
  50% {
    box-shadow: -6px 9px 0px 0px #fcf3b5, 
                -13px 13px 0px 0px #fee970,
                -13px -7px 0px 0px #fcf3b5,
                10px -7px 0px 0px #fee970,
                -12px -6px 0px 0px #fcf3b5,
                16px 9px 0px 0px #fbda57,
                4px 13px 0px 0px #fbc11a,
                3px -13px 0px 0px #fbda57,
                3px 17px 0px 0px #fbc11a;
  }
  75% {
    box-shadow: -5px -12px 0px 0px #fcf3b5,
                -13px 2px 0px 0px #fee970,
                9px -3px 0px 0px #fcf3b5,
                -1px 12px 0px 0px #fee970,
                -14px -7px 0px 0px #fcf3b5,
                8px 12px 0px 0px #fbda57,
                -11px 11px 0px 0px #fbc11a,
                8px -9px 0px 0px #fbda57,
                -9px 14px 0px 0px #fbc11a;
  }
  100% {
    box-shadow: 12px 0px 0px 0px #fcf3b5, 
                0px 16px 0px 0px #fee970,
                -15px 4px 0px 0px #fcf3b5,
                0px -16px 0px 0px #fee970,
                -11px 11px 0px 0px #fcf3b5,
                16px -9px 0px 0px #fbda57,
                17px 9px 0px 0px #fbc11a,
                -14px -15px 0px 0px #fbda57,
                11px 17px 0px 0px #fbc11a;
  }
}

@keyframes stars {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.5) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes birds {
  0% {
    top: 17vh;
    right: -13vw;
    transform: rotateZ(36deg);
  }
  35% {
    top: 10vh;
    right: 12vw;
  }
  60% {
    top: 6vh;
    right: 24vw;
    transform: scale(0.5) rotate(36deg);
  }
  75% {
    top: -3vh;
    right: 25vw;
    transform: scale(0.2) rotate(36deg);
  }

  100% {
    top: -10vh;
    right: 26vw;
    transform: scale(0.2) rotate(36deg);
  }
}

</style>
