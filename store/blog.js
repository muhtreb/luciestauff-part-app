export const state = () => ({
  blogPosts: [],
  blogPostCategories: [],
  blogPostCategory: null
})

export const actions = {
  async getBlogPosts({ commit }, formData) {
    const response = await this.$blogRepository.getBlogPosts(formData)
    commit('setBlogPosts', response.data)
  },

  async getBlogPostCategories({ context, commit }, params) {
    const response = await this.$blogRepository.getBlogPostCategories()
    commit('setBlogPostCategories', response.data)
  },

  async getBlogPostCategoryBySlug({ context, commit }, slug) {
    const response = await this.$blogRepository.getBlogPostCategoryBySlug(slug)
    commit('setBlogPostCategory', response.data)
  }
}

export const mutations = {
  setBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  },

  setBlogPostCategories(state, blogPostCategories) {
    state.blogPostCategories = blogPostCategories
  },

  setBlogPostCategory(state, blogPostCategory) {
    state.blogPostCategory = blogPostCategory
  }
}
