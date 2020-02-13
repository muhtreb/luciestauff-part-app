<template>
  <div
    class="product cursor-pointer"
    :key="product.id"
    @click="goToProduct(product)"
  >
    <div class="product-image">
      <img :src="product.image" />
    </div>
    <div class="product-title">{{ product.title }}</div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    goToProduct(product) {
      this.$router.push({
        name: 'shop-product-slug',
        params: {
          slug: product.slug
        }
      })
    }
  }
}
</script>
