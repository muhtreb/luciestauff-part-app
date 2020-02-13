<template>
  <div class="blog-article-container">
    <div
      class="blog-article  cursor-pointer"
      @click.prevent="goToArticle(blogPost)"
    >
      <h3 class="blog-article-category">
        <span>{{ blogPost.categories[0].name }}</span>
      </h3>
      <div class="blog-article-image-container">
        <div
          class="blog-article-image"
          :style="{
            backgroundImage: 'url(' + getArticleImage(blogPost) + ')'
          }"
        ></div>
      </div>
      <h2 class="blog-article-title">
        <span>{{ blogPost.title }}</span>
      </h2>

      <div class="blog-article-category-color"></div>
      <div class="blog-article-link">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: blogPost.slug } }"
          >Read</nuxt-link
        >
      </div>
    </div>
    <div class="blog-article-products" v-if="blogPost.products.length > 0">
      <div class="flex -mx-2">
        <BlogProduct
          class="w-1/3 px-2"
          v-for="product in blogPost.products"
          :key="product.id"
          :product="product"
        >
        </BlogProduct>
      </div>
    </div>
  </div>
</template>

<script>
import BlogProduct from '@/components/BlogProduct'
export default {
  components: { BlogProduct },
  props: ['blogPost'],
  methods: {
    getArticleImage(article) {
      return article.image // require(`@/assets/img/blog/${article.image}`)
    },
    goToArticle(article) {
      this.$router.push({
        name: 'blog-slug',
        params: {
          slug: article.slug
        }
      })
    }
  }
}
</script>
