export const state = () => ({
  images: []
})

export const actions = {
  async getImages({ commit }, params) {
    const response = await this.$axios.get('/instagram', {
      params
    })
    commit('setImages', response.data.data)
  }
}

export const mutations = {
  setImages(state, images) {
    state.images = images
  }
}
