<template>
  <div class="blog-article-container">
    <div
      class="blog-article  cursor-pointer"
      @click.prevent="goToBlogPost(blogPost)"
    >
      <h3 class="blog-article-category">
        <span>{{
          blogPost.categories.length > 0
            ? blogPost.categories[0].name
            : 'No Category'
        }}</span>
      </h3>
      <div class="blog-article-image-container">
        <div
          class="blog-article-image"
          :style="{
            backgroundImage: 'url(' + getBlogPostImage(blogPost) + ')'
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
    <div
      class="blog-article-products"
      v-if="showProducts && blogPost.products.length > 0"
    >
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
  props: {
    blogPost: Object,
    showProducts: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getBlogPostImage(blogPost) {
      return blogPost.imageUrl // require(`@/assets/img/blog/${article.image}`)
    },
    goToBlogPost(blogPost) {
      this.$router.push({
        name: 'blog-slug',
        params: {
          slug: blogPost.slug
        }
      })
    }
  }
}
</script>

<style lang="scss">
.blog-article-container {
  margin-bottom: 200px;
  .blog-article {
    position: relative;
    display: flex;
    .blog-article-image-container {
      width: calc(80% - 60px);
      .blog-article-image {
        width: 100%;
        padding-bottom: 100%;
        height: 0;
        overflow: hidden;
        background-size: cover;
        background-position: center center;
        background-color: lightgrey;
      }
    }

    .blog-article-category-color {
      position: absolute;
      right: 0;
      top: 100px;
      border-bottom: 300px solid #f5e6df;
      border-left: 100px solid transparent;
      border-right: 0 solid transparent;
      height: 0;
      width: calc(20% + 100px);
    }

    .blog-article-link {
      position: absolute;
      right: -13px;
      top: 330px;
      border-bottom: 73px solid #1d5353;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      height: 0;
      width: 81px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
      color: white;
      transform: rotate(64deg);
      transition: 0.2s ease transform;

      a {
        position: absolute;
        top: 29px;
        left: -10px;
        transform: rotate(-64deg);
        text-transform: uppercase;
        transition: 0.2s ease transform;
      }
    }

    .blog-article-category {
      width: 60px;
      text-align: left;
      height: 100%;
      flex-shrink: 0;
      span {
        transform: rotate(-90deg);
        text-transform: uppercase;
        transform-origin: 0 100%;
        position: absolute;
        line-height: 25px;
        font-size: 24px;
        letter-spacing: 4px;
        z-index: 10;
        height: 25px;
        width: 100%;
        left: 35px;
        bottom: 0;
      }
    }

    .blog-article-title {
      position: absolute;
      right: 20px;
      top: 118px;
      z-index: 100;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: flex;
      justify-content: flex-end;
      color: black;
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f7d4c4ad;
      max-width: 600px;
      transition: 0.5s ease color;
    }

    &:hover {
      .blog-article-title {
        color: #1d5353;
      }
      .blog-article-link {
        transform: rotate(74deg);
        a {
          transform: rotate(-74deg);
          font-weight: bold;
        }
      }
    }
  }
  .blog-article-products {
    margin-top: 20px;
    .blog-article-product {
    }
  }
}

@screen sm {
  .blog-article-container {
    .blog-article {
      .blog-article-image-container {
        .blog-article-image {
        }
      }

      .blog-article-category-color {
        position: absolute;
        right: 0;
        top: 30px;
        border-bottom-width: 200px;
      }

      .blog-article-title {
        top: 60px;
      }
      .blog-article-link {
        top: 175px;
      }
    }
  }
}
</style>
