export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('instagram/getImages')
    await dispatch('setting/getSettings')
  }
}
