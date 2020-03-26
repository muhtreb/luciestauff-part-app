<template>
  <Products :products="products"></Products>
</template>

<script>
import Products from '@/components/Products'
import SEO from '@/components/SEO'
export default {
  mixins: [SEO],
  components: { Products },
  head() {
    return {
      bodyAttrs: {
        class: ['page-shop-products', 'page-shop']
      },
      title: this.getSeoTitle('Shop')
    }
  },
  async asyncData({ app, params, store }) {
    await store.dispatch('shop/getProducts')
    return {
      products: store.state.shop.products
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Shop')
    this.$store.commit('banner/setBannerSubtitle', false)
  }
}
</script>
