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
      title: this.getSeoTitle(`${this.productCategory.name} | Shop`)
    }
  },
  async asyncData({ app, params, store }) {
    await Promise.all([
      store.dispatch('shop/getProducts', {
        filters: {
          categories: [params.slug]
        }
      }),
      store.dispatch('shop/getProductCategoryBySlug', params.slug)
    ])
    return {
      products: store.state.shop.products,
      productCategory: store.state.shop.productCategory
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Shop')
    this.$store.commit('banner/setBannerSubtitle', this.productCategory.name)
  }
}
</script>
