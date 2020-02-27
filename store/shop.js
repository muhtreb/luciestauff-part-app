export const state = () => ({
  products: [],
  productCategories: [],
  productCategory: null
})

export const actions = {
  async getProducts({ commit }, formData) {
    const response = await this.$shopRepository.getProducts(formData)
    commit('setProducts', response.data)
  },

  async getProductCategories({ context, commit }, params) {
    const response = await this.$shopRepository.getProductCategories()
    commit('setProductCategories', response.data)
  },

  async getProductCategoryBySlug({ context, commit }, slug) {
    const response = await this.$shopRepository.getProductCategoryBySlug(slug)
    commit('setProductCategory', response.data)
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },

  setProductCategories(state, productCategories) {
    state.productCategories = productCategories
  },

  setProductCategory(state, productCategory) {
    state.productCategory = productCategory
  }
}
