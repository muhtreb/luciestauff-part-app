export const state = () => ({
  show: false,
  title: false,
  subtitle: false,
  slider: false,
  sliderMedias: []
})

export const mutations = {
  setBanner(state, data) {
    state.show = data.show || false
    state.title = data.title || false
    state.subtitle = data.subtitle || false
    state.slider = data.slider || false
    state.sliderMedias = data.sliderMedias || []
  },
  setBannerSlider(state, data) {
    state.show = data.show || false
    state.slider = data.slider || false
    state.sliderMedias = data.sliderMedias || []
  },
  setBannerTitle(state, title) {
    state.title = title
  },
  setBannerSubtitle(state, subtitle) {
    state.subtitle = subtitle
  }
}
