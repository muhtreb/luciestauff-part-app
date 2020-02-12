<template>
  <div>
    <h1>Shop</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-shop']
      }
    }
  },
  created() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Shop'
    })
  }
}
</script>
