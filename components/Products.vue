<template>
  <div class="shop-products">
    <div class="flex flex-wrap -mx-2">
      <div
        class="lg:w-1/3 md:w-1/2 w-full px-2"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product"> </Product>
      </div>
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
