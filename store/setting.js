export const state = () => ({
  settings: []
})

export const actions = {
  async getSettings({ commit }, params) {
    const response = await this.$settingRepository.getSettings(params)
    commit('setSettings', response.data)
  }
}

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings
  }
}
