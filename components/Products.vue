<template>
  <div class="shop-products">
    <div class="flex -mx-2">
      <Product
        class="px-2"
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </Product>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  components: { Product },
  props: ['products'],
  methods: {
    goToProduct(product) {
      this.$router.push({
        name: 'shop-slug',
        params: {
          slug: product.slug
        }
      })
    }
  }
}
</script>
