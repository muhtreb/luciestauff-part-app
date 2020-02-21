export const state = () => ({
  portfolioCategories: []
})

export const actions = {
  async getPortfolioCategories({ context, commit }, params) {
    const response = await this.$portfolioRepository.getPortfolioCategories()
    commit('setPortfolioCategories', response.data)
  }
}

export const mutations = {
  setPortfolioCategories(state, portfolioCategories) {
    state.portfolioCategories = portfolioCategories
  }
}
