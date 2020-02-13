export default ($axios) => () => ({
  getPictures(params) {
    return $axios.$get(`/instagram`, {
      params
    })
  }
})
