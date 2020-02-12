<template>
  <div>
    <div class="container">
      <div class="blog-container">
        <div class="blog-content">
          <nuxt-child></nuxt-child>
        </div>
        <nav class="blog-categories">
          <nuxt-link to="/blog/category/category1">Category 1</nuxt-link>
          <nuxt-link to="/blog/category/category2">Category 3</nuxt-link>
          <nuxt-link to="/blog/category/category3">Category 3</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
