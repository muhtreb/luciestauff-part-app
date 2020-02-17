<template>
  <div>
    <nav class="portfolio-nav">
      <div class="container">
        <nuxt-link to="/portfolio/category1">Catégorie 1</nuxt-link>
        <nuxt-link to="/portfolio/category2">Catégorie 2</nuxt-link>
        <nuxt-link to="/portfolio/category3">Catégorie 3</nuxt-link>
        <nuxt-link to="/portfolio/category4">Catégorie 4</nuxt-link>
      </div>
    </nav>
    <div class="container">
      <div class="portfolio-content">
        <nuxt-child :key="nuxtChildKey"></nuxt-child>
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
  }
}
</script>
