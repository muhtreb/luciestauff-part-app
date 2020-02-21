<template>
  <div>
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
  computed: {
    nuxtChildKey() {
      return this.$route.name + '_' + md5(JSON.stringify(this.$route.params))
    }
  },
  async asyncData({ app, params, store }) {
    await store.dispatch('portfolio/getPortfolioCategories')
    return {
      portfolioCategories: store.state.portfolio.portfolioCategories
    }
  }
}
</script>
