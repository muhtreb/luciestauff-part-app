export const state = () => ({
  homepage: {},
  services: {}
})

export const actions = {
  async getHomepageData({ commit }) {
    const response = await this.$dataRepository.getHomepageData()
    commit('setHomepageData', response.data)
  },
  async getServicesData({ commit }) {
    const response = await this.$dataRepository.getServicesData()
    console.log(response)
    commit('setServicesData', response.data)
  }
}

export const mutations = {
  setHomepageData(state, data) {
    state.homepage = data
  },
  setServicesData(state, data) {
    state.services = data
  }
}
