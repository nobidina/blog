<template>
  <main class="article-page">
    <page-header :links="links" />
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
    article: {},
    links: {
      prevPage: '',
      nextPage: ''
    }
  }),

  created() {
    this.article = this.getArticleData(this.$route.params.id);
    this.links = this.getLinks(this.$route.params.id);
  },

  watch: {
    $route(to) {
      this.article = this.getArticleData(to.params.id);
      this.links = this.getLinks(to.params.id);
    }
  },

  methods: {
    getArticleData(cityId) {
      for (let item of blogArticles) {
        if (item.id === cityId) {
          return item;
        } else {
          continue;
        }
      }
    },

    getLinks(cityId) {
      cityId = + cityId;
      const prefix = '/article/';
      const nextPage = cityId === blogArticles.length ? '' : `${prefix}${cityId + 1}`;
      const prevPage = cityId === 1 ? '' : `${prefix}${cityId - 1}`;

      return { 
        prevPage, 
        nextPage,
      };
    }
  }
}
</script>
