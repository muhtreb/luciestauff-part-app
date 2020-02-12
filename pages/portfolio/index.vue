<template>
  <div>
    <h1>Portfolio</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-portfolio']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Portfolio'
    })
  }
}
</script>
