<template>
  <Product :product="product"></Product>
</template>

<script>
import Product from '@/components/Product'

export default {
  components: { Product },
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
