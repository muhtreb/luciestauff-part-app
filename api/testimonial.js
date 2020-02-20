const qs = require('qs')

export default ($axios) => () => ({
  getTestimonials(params) {
    return $axios.$get(`/testimonials?${qs.stringify(params)}`)
  }
})
