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
      <svg class="custom-article__arrow" xmlns="http://www.w3.org/2000/svg" width="34" height="56" viewBox="0 0 34 56" fill="none">
        <path d="M12.5 23.9021C12.5 23.9021 -0.0246638 37.5001 6.36694e-06 45.5C0.0246765 53.5 29.7435 58.2546 33 54.5C35.6101 51.3245 26.2339 36.543 23.5 23.9021C23.5 23.9021 29.5031 24.8558 29.5 23.8558C29.4969 22.8558 18.4969 -0.503043 17.5 0.500017C16.5031 1.50308 4.99998 23.8836 7.22127 23.9021C9.44256 23.9206 12.5 23.9021 12.5 23.9021Z" fill="#AC9676"/>
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
@import "../less/variables.less";
@import "../less/mixins.less";

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
      bottom: -10px;
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
