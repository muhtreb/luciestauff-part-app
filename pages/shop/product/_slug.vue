<template>
  <div
    class="product cursor-pointer"
    :key="product.id"
    @click="goToProduct(product)"
  >
    <div class="product-image">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-title">{{ product.title }}</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-shop-detail', 'page-shop']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Shop'
    })
  },
  async asyncData({ app, params, error, payload, store }) {
    const response = await app.$shopRepository.getProductBySlug(params.slug)
    return {
      product: response.data
    }
  },
  data() {
    return {
      slug: ''
    }
  }
}
</script>
