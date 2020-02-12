export const state = () => ({
  show: false,
  title: false,
  subtitle: false
})

export const mutations = {
  setBanner(state, data) {
    state.show = data.show || false
    state.title = data.title || false
    state.subtitle = data.subtitle || false
  }
}
