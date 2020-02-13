<template>
  <div>
    <div class="container">
      <div class="blog-container">
        <div class="blog-content">
          <nuxt-child :key="$route.name"></nuxt-child>
        </div>
        <nav class="blog-categories">
          <nuxt-link
            :to="`/blog/category/${blogPostCategory.slug}`"
            v-for="blogPostCategory in blogPostCategories"
            :key="blogPostCategory.id"
            >{{ blogPostCategory.name }}</nuxt-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, store }) {
    await store.dispatch('blog/getBlogPostCategories')
    return {
      blogPostCategories: store.state.blog.blogPostCategories
    }
  }
}
</script>
