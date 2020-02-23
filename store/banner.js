export const state = () => ({
  show: false,
  title: false,
  subtitle: false,
  slider: false,
  sliderImages: []
})

export const mutations = {
  setBanner(state, data) {
    state.show = data.show || false
    state.title = data.title || false
    state.subtitle = data.subtitle || false
    state.slider = data.slider || false
    state.sliderImages = data.sliderImages || []
  }
}
