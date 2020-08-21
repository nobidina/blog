<template>
  <main class="home">
    <first-screen :title="mainTitle"/>
    <custom-section>
      <album :album="album" />
    </custom-section>
    <page-footer />
  </main>
</template>

<script>
import Album from '@/components/Album';
import CustomSection from '@/components/CustomSection';
import FirstScreen from '@/components/FirstScreen';
import PageFooter from '@/components/PageFooter';

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
    album: [
      {
        src: '',
        srcSet: '',
        alt: '',
        title: 'London'
      },
      {
        src: '',
        srcSet: '',
        alt: '',
        title: 'Brighton'
      },
      {
        src: '',
        srcSet: '',
        alt: '',
        title: 'Dover'
      },
      {
        src: '',
        srcSet: '',
        alt: '',
        title: 'Edinburgh'
      },
      {
        src: '',
        srcSet: '',
        alt: '',
        title: 'Glasgow'
      }
    ]
  })
}
</script>
