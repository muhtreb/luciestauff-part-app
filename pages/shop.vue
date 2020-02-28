<template>
  <div :class="{ 'shop--sticky': sticky }">
    <div class="shop-container">
      <nav class="shop-categories">
        <div class="container">
          <nuxt-link
            :to="`/shop/category/${productCategory.slug}`"
            v-for="productCategory in productCategories"
            :key="productCategory.id"
            >{{ productCategory.name }}</nuxt-link
          >
        </div>
      </nav>
      <div class="container">
        <div class="shop-content">
          <nuxt-child :key="nuxtChildKey"></nuxt-child>
        </div>
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
      store.dispatch('shop/getProductCategories'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('shop-banner')
    ])

    return {
      productCategories: store.state.shop.productCategories,
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
