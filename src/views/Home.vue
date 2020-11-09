<template>
  <main class="home">
    <first-screen :title="mainTitle" />
    <custom-section>
      <album :album="album" :title="albumTitle" />
    </custom-section>
    <page-footer :contacts="contacts" />
  </main>
</template>

<script>
import Album from '@/components/Album';
import CustomSection from '@/components/CustomSection';
import FirstScreen from '@/components/FirstScreen';
import PageFooter from '@/components/PageFooter';

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

export default {
  name: 'Home',
  
  components: {
    Album,
    CustomSection,
    FirstScreen,
    PageFooter
  },

  data: () => ({
    mainTitle: 'A space for your title',
    albumTitle: 'My advantures',
    album: [
      {
        src: BrightonImg1x,
        srcSet: BrightonImg2x,
        alt: 'Brighton West Pier',
        title: 'Brighton'
      },
      {
        src: LondonImg1x,
        srcSet: LondonImg2x,
        alt: 'Greenwich hill view',
        title: 'London'
      },
      {
        src: DoverImg1x,
        srcSet: DoverImg2x,
        alt: 'White Cliffs of Dover',
        title: 'Dover'
      },
      {
        src: GlasgowImg1x,
        srcSet: GlasgowImg2x,
        alt: 'Streets of Glasgow',
        title: 'Glasgow'
      },
      {
        src: EdinburghImg1x,
        srcSet: EdinburghImg2x,
        alt: 'Streets of Edinburgh',
        title: 'Edinburgh'
      },
      {
        src: EastbourneImg1x,
        srcSet: EastbourneImg2x,
        alt: 'Eastbourne beach',
        title: 'Eastbourne'
      },
      {
        src: EastbourneImg1x,
        srcSet: EastbourneImg2x,
        alt: 'Eastbourne beach',
        title: 'Eastboussrne'
      }
    ],
    contacts: [
      {
        link: "https://www.facebook.com/profile.php?id=100000435645436",
        icon: "facebook"
      },
      {
        link: "https://www.instagram.com/nadezda_obidina/",
        icon: "instagram"
      }
    ]
  })
}
</script>
