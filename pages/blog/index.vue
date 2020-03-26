<template>
  <BlogPosts :blog-posts="blogPosts"></BlogPosts>
</template>

<script>
import BlogPosts from '@/components/BlogPosts'
import SEO from '@/components/SEO'
export default {
  mixins: [SEO],
  components: { BlogPosts },
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-articles', 'page-blog']
      },
      title: this.getSeoTitle('Blog')
    }
  },
  async asyncData({ app, params, store }) {
    await store.dispatch('blog/getBlogPosts', {
      per_page: 3,
      sort_by: ['created_at'],
      sort_desc: [true]
    })

    return {
      blogPosts: store.state.blog.blogPosts
    }
  },
  mounted() {
    this.$store.commit(
      'banner/setBannerTitle',
      "Le Blog<br/>L'atelier Hair & Make Up"
    )
    this.$store.commit('banner/setBannerSubtitle', false)
  }
}
</script>
