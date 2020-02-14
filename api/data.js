export default ($axios) => () => ({
  getHomepageData(params) {
    return $axios.$get(`/data/homepage`)
  },

  getServicesData(slug) {
    return $axios.$get(`/data/services`)
  }
})
