<template>
  <div>
    <Portfolio :portfolio-category="portfolioCategory"></Portfolio>
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
  async asyncData({ app, params, error, payload, store }) {
    const response = await app.$portfolioRepository.getPortfolioCategoryBySlug(
      params.slug
    )
    return {
      portfolioCategory: response.data
    }
  },
  data() {
    return {
      slug: ''
    }
  }
}
</script>
