const qs = require('qs')

export default ($axios) => () => ({
  getBlogPosts(params) {
    return $axios.$get(`/blog/posts?${qs.stringify(params)}`)
  },

  getBlogPostBySlug(slug) {
    return $axios.$get(`/blog/posts/${slug}`)
  },

  getBlogPostCategories() {
    return $axios.$get(`/blog/categories`)
  }
})
