<template>
  <div class="blog-article">
    <h1 class="blog-article-title title title--left-lined">
      <span>{{ blogPost.title }}</span>
    </h1>
    <div class="blog-article-image">
      <img :src="blogPost.image_url" />
    </div>
    <div
      class="blog-article-content wysiwyg"
      v-html="toMarkdown(blogPost.content)"
    ></div>

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
import marked from 'marked'
import BlogProduct from '@/components/BlogProduct'
import SEO from '@/components/SEO'
export default {
  mixins: [SEO],
  components: { BlogProduct },
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-detail', 'page-blog']
      },
      title: this.getSeoTitle(`${this.blogPost.title} | Blog`)
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Le Blog')
    this.$store.commit('banner/setBannerSubtitle', this.blogPost.title)
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
  },
  methods: {
    toMarkdown(value) {
      return value ? marked(value) : ''
    }
  }
}
</script>
