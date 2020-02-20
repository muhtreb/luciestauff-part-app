<template>
  <div>
    <div class="shop-container">
      <nav class="shop-categories">
        <div class="container">
          <nuxt-link
            :to="`/shop/category/${productCategory.slug}`"
            v-for="productCategory in productCategories"
            :key="productCategory.id"
            >{{ productCategory.name }}</nuxt-link
          >
        </div>
      </nav>
      <div class="container">
        <div class="shop-content">
          <nuxt-child :key="nuxtChildKey"></nuxt-child>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'blueimp-md5'
export default {
  computed: {
    nuxtChildKey() {
      return this.$route.name + '_' + md5(JSON.stringify(this.$route.params))
    }
  },
  async asyncData({ app, params, store }) {
    await store.dispatch('shop/getProductCategories')
    return {
      productCategories: store.state.shop.productCategories
    }
  }
}
</script>
