<template>
  <div>
    <Portfolio :portfolio-category="{ images: [] }"></Portfolio>
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

    this.$router.push({
      name: 'portfolio-category-slug',
      params: { slug: this.$store.state.portfolio.portfolioCategories[0].slug }
    })
  }
}
</script>
