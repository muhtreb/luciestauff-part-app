async function initActions(dispatch) {
  await dispatch('instagram/getImages')
  await dispatch('setting/getSettings')
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await initActions(dispatch)
  },
  async nuxtClientInit({ dispatch }) {
    await initActions(dispatch)
  }
}
