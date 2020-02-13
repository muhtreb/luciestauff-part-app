<template>
  <Products :products="products"></Products>
</template>

<script>
import Products from '@/components/Products'
export default {
  components: { Products },
  head() {
    return {
      bodyAttrs: {
        class: ['page-shop-products', 'page-shop']
      }
    }
  },
  async asyncData({ app, params, store }) {
    await store.dispatch('shop/getProducts', {
      filters: {
        categories: [params.slug]
      }
    })
    return {
      products: store.state.shop.products
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Shop'
    })
  }
}
</script>
