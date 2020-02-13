export const state = () => ({
  products: [],
  productCategories: []
})

export const actions = {
  async getProducts({ commit }, formData) {
    const response = await this.$shopRepository.getProducts(formData)
    commit('setProducts', response.data)
  },

  async getProductCategories({ context, commit }, params) {
    const response = await this.$shopRepository.getProductCategories()
    commit('setProductCategories', response.data)
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },

  setProductCategories(state, productCategories) {
    state.productCategories = productCategories
  }
}
