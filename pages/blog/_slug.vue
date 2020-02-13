<template>
  <div class="blog-article">
    <nuxt-link to="/blog">Back</nuxt-link>
    <h1 class="blog-article-title title title--left-lined">
      <span>{{ blogPost.title }}</span>
    </h1>
    <div class="blog-article-image">
      <img :src="blogPost.image" />
    </div>
    <div class="blog-article-content"></div>

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
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-detail', 'page-blog']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "Le Blog<br/>L'atelier Hair & Make Up"
    })
  },
  async asyncData({ app, params, error, payload, store }) {
    const response = await app.$blogRepository.getBlogPostBySlug(params.slug)
    return {
      blogPost: response.data
    }
  },
  data() {
    return {
      slug: ''
    }
  }
}
</script>
