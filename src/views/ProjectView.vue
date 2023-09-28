<template>
  <div>
    <HeaderComp />
    <BannerBlog2 bannerHeader="Our Project" bannerText="Home / Project" />
    <ProjectBlog :items="items" />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerBlog2 from '@/components/BannerBlog2.vue';
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import ProjectBlog from '@/components/ProjectBlog.vue';


export default {
  name: 'ProjectView',
  components: {
    HeaderComp,
    FooterComp,
    BannerBlog2,
    ProjectBlog
  },
  data() {
    return {
      items: [
        {
          img: require('../assets/item1.png'),
          alt: 'item1',
          tags:'Bedroom',
          header: 'Minimal Bedroom',
          text: 'Decor / Artchitecture',
        },
        {
          img: require('../assets/item2.png'),
          alt: 'item2',
          tags:'Bathroom',
          header: 'Minimal Bedroom',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item3.png'),
          alt: 'item3',
          tags:'Bedroom',
          header: 'Classic Minimal Bedroom',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item4.png'),
          alt: 'item4',
          tags:'Bathroom',
          header: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item5.png'),
          alt: 'item5',
          tags:'Kitchan',
          header: 'Minimal Bedroom table',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item6.png'),
          alt: 'item6',
          tags:'Living Area',
          header: 'System Table',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item7.png'),
          alt: 'item7',
          tags:'Kitchan',
          header: 'Modern Medroom',
          text: 'Decor / Artchitecture',
        }, {
          img: require('../assets/item8.png'),
          alt: 'item8',
          tags:'Living Area',
          header: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
        },
      ],
      url:require('../assets/bannerBlog.jpg'),
    }
  },
}
</script>
<style>

</style>
