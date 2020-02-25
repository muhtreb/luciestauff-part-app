export const state = () => ({
  images: []
})

export const actions = {
  async getImages({ commit, app }, params) {
    const response = await this.$instagramRepository.getPictures(params)
    commit('setImages', response.data)
  }
}

export const mutations = {
  setImages(state, images) {
    state.images = images
  }
}
