<template>
  <div class="blog-articles">
    <BlogPost
      :blog-post="blogPost"
      v-for="(blogPost, id) in blogPosts"
      :key="`blog-post-${id}`"
    ></BlogPost>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'
export default {
  components: { BlogPost },
  props: ['blogPosts']
}
</script>
