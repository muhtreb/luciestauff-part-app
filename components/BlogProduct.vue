<template>
  <div
    class="product cursor-pointer"
    :key="product.id"
    @click="goToProduct(product)"
  >
    <div
      class="product-image"
      :style="{ backgroundImage: 'url(' + getProductImage(product) + ')' }"
    ></div>
    <div class="product-title">{{ product.title }}</div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    getProductImage(product) {
      return product.small_image_url // require(`@/assets/img/blog/${article.image}`)
    },
    goToProduct(product) {
      window.open(product.url)
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  .product-image {
    background-size: cover;
    background-position: center center;
    height: 0;
    padding-bottom: 100%;
  }

  .product-title {
    margin-top: 5px;
  }
}
</style>
