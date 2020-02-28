<template>
  <div :class="{ 'portfolio--sticky': sticky }">
    <nav class="portfolio-nav">
      <div class="container">
        <nuxt-link
          :to="`/portfolio/category/${portfolioCategory.slug}`"
          v-for="portfolioCategory in portfolioCategories"
          :key="portfolioCategory.id"
          >{{ portfolioCategory.name }}</nuxt-link
        >
      </div>
    </nav>
    <div class="container">
      <div class="portfolio-content">
        <nuxt-child :key="nuxtChildKey"></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'blueimp-md5'
export default {
  data() {
    return { sticky: false, scrollY: null }
  },
  computed: {
    nuxtChildKey() {
      return this.$route.name + '_' + md5(JSON.stringify(this.$route.params))
    }
  },
  async asyncData({ app, params, store }) {
    const res = await Promise.all([
      store.dispatch('portfolio/getPortfolioCategories'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('portfolio-banner')
    ])
    return {
      portfolioCategories: store.state.portfolio.portfolioCategories,
      bannerPortfolioCategory: res[1].data
    }
  },
  mounted() {
    window.addEventListener('scroll', (event) => {
      this.sticky =
        Math.round(window.scrollY) >
        document.getElementsByClassName('banner-slider')[0].offsetHeight
    })
    this.$store.commit('banner/setBannerSlider', {
      show: true,
      slider: true,
      sliderMedias: this.bannerPortfolioCategory.medias
    })
  }
}
</script>
