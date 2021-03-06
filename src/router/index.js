import Vue from 'vue';
import VueRouter from 'vue-router';
import ArticlePage from '../views/ArticlePage.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/article/:id',
    name: 'ArticlePage',
    component: ArticlePage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
