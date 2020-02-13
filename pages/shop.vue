<template>
  <div>
    <div class="container">
      <div class="shop-container">
        <nav class="shop-categories">
          <nuxt-link
            :to="`/shop/category/${productCategory.slug}`"
            v-for="productCategory in productCategories"
            :key="productCategory.id"
            >{{ productCategory.name }}</nuxt-link
          >
        </nav>
        <div class="shop-content">
          <nuxt-child :key="$route.name"></nuxt-child>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, store }) {
    await store.dispatch('shop/getProductCategories')
    return {
      productCategories: store.state.shop.productCategories
    }
  }
}
</script>
