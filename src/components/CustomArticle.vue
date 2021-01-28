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
  }
}
</script>

<style scoped lang="less">
@import "../less/variables.less";
@import "../less/mixins.less";

.custom-article {
  .container();
  display: flex;
  flex-direction: column;

  @media @tablet {
    max-width: 800px;
  }

  @media @desktop {
    width: 800px;
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
    align-self: flex-end;
    font-family: @font-family-text;
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
