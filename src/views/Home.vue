<template>
  <main class="home">
    <first-screen :title="mainTitle" />
    <articles-list :list="album" :title="albumTitle" />
  </main>
</template>

<script>
import ArticlesList from '@/components/ArticlesList';
import FirstScreen from '@/components/FirstScreen';

import LondonImg1x from './img/london@1x.jpg';
import LondonImg2x from './img/london@2x.jpg';
import BrightonImg1x from './img/brighton@1x.jpg';
import BrightonImg2x from './img/brighton@2x.jpg';
import DoverImg1x from './img/dover@1x.jpg';
import DoverImg2x from './img/dover@2x.jpg';
import EdinburghImg1x from './img/edinburgh@1x.jpg';
import EdinburghImg2x from './img/edinburgh@2x.jpg';
import GlasgowImg1x from './img/glasgow@1x.jpg';
import GlasgowImg2x from './img/glasgow@2x.jpg';
import EastbourneImg1x from './img/eastbourne@1x.jpg';
import EastbourneImg2x from './img/eastbourne@2x.jpg';
import OxfordImg1x from './img/oxford@1x.jpg';
import OxfordImg2x from './img/oxford@2x.jpg';

export default {
  name: 'Home',
  
  components: {
    ArticlesList,
    FirstScreen
  },

  data: () => ({
    mainTitle: 'A space for your title',
    albumTitle: 'My advantures',
    album: [
      {
        id: 1,
        src: BrightonImg1x,
        srcSet: BrightonImg2x,
        alt: 'Brighton West Pier',
        title: 'Brighton'
      },
      {
        id: 2,
        src: LondonImg1x,
        srcSet: LondonImg2x,
        alt: 'Greenwich hill view',
        title: 'London'
      },
      {
        id: 3,
        src: DoverImg1x,
        srcSet: DoverImg2x,
        alt: 'White Cliffs of Dover',
        title: 'Dover'
      },
      {
        id: 4,
        src: GlasgowImg1x,
        srcSet: GlasgowImg2x,
        alt: 'Streets of Glasgow',
        title: 'Glasgow'
      },
      {
        id: 5,
        src: EdinburghImg1x,
        srcSet: EdinburghImg2x,
        alt: 'Streets of Edinburgh',
        title: 'Edinburgh'
      },
      {
        id: 6,
        src: EastbourneImg1x,
        srcSet: EastbourneImg2x,
        alt: 'Eastbourne beach',
        title: 'Eastbourne'
      },
      {
        id: 7,
        src: OxfordImg1x,
        srcSet: OxfordImg2x,
        alt: 'Streets of Oxford',
        title: 'Oxford'
      }
    ]
  })
}
</script>
