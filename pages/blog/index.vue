<template>
  <BlogPosts :blog-posts="blogPosts"></BlogPosts>
</template>

<script>
import BlogPosts from '@/components/BlogPosts'
export default {
  components: { BlogPosts },
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-articles', 'page-blog']
      }
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
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "Le Blog<br/>L'atelier Hair & Make Up"
    })
  }
}
</script>
