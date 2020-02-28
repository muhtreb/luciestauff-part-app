<template>
  <div>
    <div class="container">
      <div class="blog-container">
        <div class="blog-content">
          <nuxt-child :key="nuxtChildKey"></nuxt-child>
        </div>
        <nav class="blog-categories">
          <nuxt-link
            :to="`/blog/category/${blogPostCategory.slug}`"
            v-for="blogPostCategory in blogPostCategories"
            :key="blogPostCategory.id"
            >{{ blogPostCategory.name }}</nuxt-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'blueimp-md5'
export default {
  computed: {
    nuxtChildKey() {
      return this.$route.name + '_' + md5(JSON.stringify(this.$route.params))
    }
  },
  async asyncData({ app, params, store }) {
    const res = await Promise.all([
      store.dispatch('blog/getBlogPostCategories'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('blog-banner')
    ])

    return {
      blogPostCategories: store.state.blog.blogPostCategories,
      bannerPortfolioCategory: res[1].data
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerSlider', {
      show: true,
      slider: true,
      sliderMedias: this.bannerPortfolioCategory.medias
    })
  }
}
</script>
