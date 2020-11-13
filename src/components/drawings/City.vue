<template>
  <div class="city">
    <div class="bush"></div>
    <div class="bush  bush--2"></div>
    <div class="house  house--wide">
      <div class="house__roof"></div>
      <div class="house__body">
        <div class="house__window"></div>
      </div>
    </div>
    <div class="house  house--thin">
      <div class="house__roof"></div>
      <div class="house__body">
        <div class="house__window"></div>
        <div class="house__window"></div>
        <div class="house__door">
          <div class="house__handle"></div>
        </div>
      </div>
    </div>
    <div class="house  house--thin">
      <div class="house__roof"></div>
      <div class="house__body">
        <div class="house__window"></div>
        <div class="house__window"></div>
        <div class="house__door">
          <div class="house__handle"></div>
        </div>
      </div>
    </div>
    <div class="tree">
      <div class="tree__crown"></div>
      <div class="tree__trunk"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.city {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.bush {
  position: relative;
  left: 30px;
  width: 30px;
  height: 35px;
  border-radius: 22px;
  background-color: #16634d;

  &--2 {
    left: 20px;
  }
}

.house {
  display: flex;
  flex-direction: column;
  margin-right: 2px;

  &:last-child {
    margin-right: 0;
  }

  &__roof {
    border-right-color: transparent;
    border-right-style: solid;
    border-bottom-color: #d31b1b;
    border-bottom-style: solid;
    border-left-color: transparent;
    border-left-style: solid;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    //background-color: #fff;
    background-color: #eae7e0;
  }

  &__window {
    position: relative;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    //background-color: #a3acb1;
    background-color: #2f4c58;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #ffffff;
    }
  }

  &__door {
    align-self: flex-end;
    position: relative;
    top: 10px;
    right: -5px;
    width: 20px;
    height: 30px;
    //background-color: #a3acb1;
    background-color: #2f4c58;
  }

  &__handle {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #fcf3b5;
  }

  &--thin {
    & .house__body {
      padding-top: 30px;
    }

    & .house__roof {
      border-right-width: 25px;
      border-bottom-width: 25px;
      border-left-width: 25px;
    }
  }

  &--wide {
    & .house__body {
      justify-content: center;
      padding: 15px 25px;
    }

    & .house__roof {
      border-right-width: 40px;
      border-bottom-width: 40px;
      border-left-width: 40px;
    }
  }
}

.tree {
  position: relative;
  left: -10px;
  width: 40px;
  height: 60px;

  &__trunk {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 7px;
    height: 21px;
    background-color: #624521;
  }

  &__crown {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 45px;
    border-radius: 20px;
    background-color: #16634d;
  }
}

</style>
