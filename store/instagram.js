export const state = () => ({
  images: []
})

export const actions = {
  async getImages({ commit, app }, params) {
    try {
      const response = await this.$instagramRepository.getPictures(params)
      commit('setImages', response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const mutations = {
  setImages(state, images) {
    state.images = images
  }
}
