export const state = () => ({
  testimonials: []
})

export const actions = {
  async getTestimonials({ commit }, formData) {
    const response = await this.$testimonialRepository.getTestimonials(formData)
    commit('setTestimonials', response.data)
  }
}

export const mutations = {
  setTestimonials(state, testimonials) {
    state.testimonials = testimonials
  }
}
