export default ($axios) => () => ({
  getSettings() {
    return $axios.$get(`/settings`)
  }
})
