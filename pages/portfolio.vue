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
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
