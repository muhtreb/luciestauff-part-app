export default ($axios) => () => ({
  getPortfolioCategories() {
    return $axios.$get(`/portfolio/categories`)
  }
})
