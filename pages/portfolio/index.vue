<template>
  <div></div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-portfolio']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Portfolio')
    this.$store.commit('banner/setBannerSubtitle', false)

    this.$router.push({
      name: 'portfolio-category-slug',
      params: { slug: this.$store.state.portfolio.portfolioCategories[0].slug }
    })
  }
}
</script>
