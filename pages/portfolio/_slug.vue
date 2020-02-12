<template>
  <div>
    <no-ssr>
      <masonry :cols="3" :gutter="20" class="portfolio-masonry">
        <div
          class="portfolio-masonry-item"
          v-for="(image, id) in getImages"
          :key="`image-${id}`"
        >
          <img :src="require(`@/assets/img/portfolio/${image.path}`)" />
        </div>
      </masonry>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
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
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  components: {
    'no-ssr': NoSSR
  },
  asyncData({ app, params, error, payload, store }) {
    return {
      slug: params.slug
    }
  },
  data() {
    return {
      slug: '',
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
  },
  computed: {
    getImages() {
      return this.images.filter((el) => el.categories.includes(this.slug))
    }
  }
}
</script>
