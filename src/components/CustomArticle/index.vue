<template>
  <article class="custom-article">
    <h1 class="custom-article__title">
      {{ article.title }}
    </h1>
    <h2 class="custom-article__subtitle">
      {{ article.introText }}
    </h2>
    <img class="custom-article__img" :src="article.mainImg.src" :alt="article.mainImg.alt">
    <div class="custom-article__content" v-html="article.content"></div>
    <span class="custom-article__time">
      {{ article.date }}
    </span>
    <div class="custom-article__anchor-top" @click="scrollTop">
      <svg class="custom-article__arrow"  xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 21 28" fill="none">
        <path d="M8.5 13C8.5 13 0.48503 20.6477 0.499993 25.5C0.514957 30.3523 16.1799 25.7815 19.5 23.5C22.1613 21.5706 18.7672 20.6639 16 13C16 13 20.5019 12.6065 20.5 12C20.4981 11.3935 12.8349 -0.1229 11.8187 0.48677C10.8025 1.09644 2.2386 12.9916 4.5 13C6.7614 13.0084 8.5 13 8.5 13Z" fill="#AC9676"/>
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CustomArticle',

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

.custom-article {
  .container();
  position: relative;
  display: flex;
  flex-direction: column;

  @media @tablet {
    max-width: 800px;
  }

  @media @desktop {
    width: 800px;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 100px;
  }

  &__title {
    margin-bottom: 4vh;
    font-weight: 400;
    font-size: 2em;
    line-height: 1em;
  }

  &__subtitle {
    margin-bottom: 5vh;
    font-family: @font-family-text;
    font-weight: 400;
    font-size: 1.1em;
    line-height: 1.5em;
    color: rgba(117, 117, 117, 1);
    letter-spacing: 0.3px;
  }

  &__img {
    display: block;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    margin: 0 auto 5vh auto;
    border: 8px solid #ac9676;
    border-radius: 5px;
  }

  &__content {
    font-family: @font-family-text;
  }

  &__time {
    align-self: flex-start;
    font-family: @font-family-text;
  }

  &__anchor-top {
    animation: jump 2.5s ease-in-out infinite;
    cursor: pointer;
    position: absolute;
    bottom: -25px;
    right: 7vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
    height: 56px;

    @media @desktop {
      height: 65px;
      right: 0;
    }
  }

  &__arrow {
    @media @desktop {
      width: auto;
      height: 65px;
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>

<style scoped>

  .custom-article__content >>> p {
    margin-bottom: 4vh;
    font-size: 1em;
    line-height: 1.7em;
    letter-spacing: 0.3px;
  }

  .custom-article__content >>> img {
    display: block;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    margin: 0 auto 4vh auto;
    border: 8px solid #ac9676;
    border-radius: 5px;
  }
</style>
