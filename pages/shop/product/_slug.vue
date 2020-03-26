<template>
  <div class="product" :key="product.id">
    <div class="product-image">
      <img :src="product.image_url" />
    </div>
    <div class="product-title">{{ product.title }}</div>
  </div>
</template>

<script>
import SEO from '@/components/SEO'
export default {
  mixins: [SEO],
  head() {
    return {
      bodyAttrs: {
        class: ['page-shop-detail', 'page-shop']
      },
      title: this.getSeoTitle(`${this.product.title} | Shop`)
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Shop')
    this.$store.commit('banner/setBannerSubtitle', this.product.title)
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
