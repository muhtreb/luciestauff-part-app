export const state = () => ({
  blogPosts: [],
  blogPostCategories: []
})

export const actions = {
  async getBlogPosts({ commit }, formData) {
    const response = await this.$blogRepository.getBlogPosts(formData)
    commit('setBlogPosts', response.data)
  },

  async getBlogPostCategories({ context, commit }, params) {
    const response = await this.$blogRepository.getBlogPostCategories()
    commit('setBlogPostCategories', response.data)
  }
}

export const mutations = {
  setBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  },

  setBlogPostCategories(state, blogPostCategories) {
    state.blogPostCategories = blogPostCategories
  }
}
