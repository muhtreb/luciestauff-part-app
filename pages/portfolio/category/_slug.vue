<template>
  <div>
    <Portfolio :portfolio-category="portfolioCategory"></Portfolio>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio'
import SEO from '@/components/SEO'
export default {
  mixins: [SEO],
  components: { Portfolio },
  head() {
    return {
      bodyAttrs: {
        class: ['page-portfolio']
      },
      title: this.getSeoTitle(`${this.portfolioCategory.name} | Portfolio`)
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Portfolio')
    this.$store.commit('banner/setBannerSubtitle', this.portfolioCategory.name)
  },
  async asyncData({ app, params, error, payload, store }) {
    const res = await app.$portfolioRepository.getPortfolioCategoryBySlug(
      params.slug
    )

    return {
      portfolioCategory: res.data
    }
  },
  data() {
    return {
      slug: ''
    }
  }
}
</script>
