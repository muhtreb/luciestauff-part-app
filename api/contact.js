export default ($axios) => () => ({
  createContactMessage(formData) {
    return $axios.$post(`/contact`, formData)
  }
})
