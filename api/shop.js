const qs = require('qs')

export default ($axios) => () => ({
  getProducts(params) {
    return $axios.$get(`/products?${qs.stringify(params)}`)
  },

  getProductBySlug(slug) {
    return $axios.$get(`/products/${slug}`)
  },

  getProductCategories() {
    return $axios.$get(`/product/categories`)
  }
})
