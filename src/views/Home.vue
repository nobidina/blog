<template>
  <main class="home">
    <first-screen :title="mainTitle" />
    <articles-list :list="articles" />
  </main>
</template>

<script>
import blogArticles from './data/blogArticles.js';
import ArticlesList from '@/components/ArticlesList';
import FirstScreen from '@/components/FirstScreen';

export default {
  name: 'Home',
  
  components: {
    ArticlesList,
    FirstScreen
  },

  data: () => ({
    mainTitle: 'Collect Moments, Not Things',
    articles: blogArticles
  })
}
</script>
