<template>
  <main class="article-page">
    <page-header />
    <custom-article :article="article" />
  </main>
</template>

<script>

import blogArticles from './data/blogArticles.js';
import CustomArticle from '@/components/CustomArticle';
import PageHeader from '@/components/PageHeader';

export default {
  name: 'ArticlePage',

  components: {
    CustomArticle,
    PageHeader
  },

  data: () => ({
    article: {}
  }),

  created() {
    this.article = this.getArticleData();
  },

  methods: {
    getArticleData() {
      const cityId = this.$route.params.id;

      for (let item of blogArticles) {
        return item.id === cityId ? item : undefined; 
      }
    }
  }
}
</script>
