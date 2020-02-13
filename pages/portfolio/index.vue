<template>
  <div>
    <Portfolio :images="images"></Portfolio>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio'

export default {
  components: { Portfolio },
  head() {
    return {
      bodyAttrs: {
        class: ['page-portfolio']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Portfolio'
    })
  },
  data() {
    return {
      images: [
        {
          path: 'hair/1145.jpg',
          categories: ['category1', 'category3']
        },
        {
          path: 'hair/1146.jpg',
          categories: ['category1', 'category4', 'category3']
        },
        {
          path: 'hair/1148.jpg',
          categories: ['category1', 'category3']
        },
        {
          path: 'hair/1149.jpg',
          categories: ['category1', 'category4']
        },
        {
          path: 'hair/1154.jpg',
          categories: ['category2', 'category4']
        },
        {
          path: 'hair/1155.jpg',
          categories: ['category2', 'category3']
        },
        {
          path: 'hair/1335.jpg',
          categories: ['category2', 'category4']
        },
        {
          path: 'hair/1336.jpg',
          categories: ['category2', 'category3']
        },
        {
          path: 'hair/1339.jpg',
          categories: ['category2', 'category4']
        },
        {
          path: 'hair/1341.jpg',
          categories: ['category2', 'category3', 'category4']
        }
      ]
    }
  }
}
</script>
