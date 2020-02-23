export default ($axios) => () => ({
  getPortfolioCategories() {
    return $axios.$get(`/portfolio/categories`)
  },

  getPortfolioCategoryBySlug(slug) {
    return $axios.$get(`/portfolio/categories/${slug}`)
  }
})
