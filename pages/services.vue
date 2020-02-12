<template>
  <div>
    <h1>Services</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-services']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Services'
    })
  }
}
</script>
