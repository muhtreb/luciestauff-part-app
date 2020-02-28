<template>
  <BlogPosts :blog-posts="blogPosts"></BlogPosts>
</template>

<script>
import BlogPosts from '@/components/BlogPosts'
export default {
  pageTransition: 'test',
  components: { BlogPosts },
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-articles', 'page-blog']
      }
    }
  },
  async asyncData({ app, params, store }) {
    await Promise.all([
      store.dispatch('blog/getBlogPosts', {
        per_page: 3,
        sort_by: ['created_at'],
        sort_desc: [true],
        filters: {
          categories: [params.slug]
        }
      }),
      store.dispatch('blog/getBlogPostCategoryBySlug', params.slug)
    ])
    return {
      blogPosts: store.state.blog.blogPosts,
      blogPostCategory: store.state.blog.blogPostCategory
    }
  },
  mounted() {
    this.$store.commit('banner/setBannerTitle', 'Le Blog')
    this.$store.commit('banner/setBannerSubtitle', this.blogPostCategory.name)
  }
}
</script>
