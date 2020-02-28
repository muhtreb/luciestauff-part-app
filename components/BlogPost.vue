<template>
  <div class="blog-article-container">
    <div class="blog-article  cursor-pointer" @click.prevent="goToBlogPost()">
      <h3 class="blog-article-category">
        <span>{{
          homepage
            ? 'Read Blog'
            : blogPost.categories.length > 0
            ? blogPost.categories[0].name
            : 'No Category'
        }}</span>
      </h3>
      <div class="blog-article-image-container">
        <div
          class="blog-article-image"
          :style="{
            backgroundImage: 'url(' + getBlogPostImage + ')'
          }"
        ></div>
      </div>
      <h2 class="blog-article-title">
        <span class="black-bar"></span>
        <span>{{ homepage ? 'Blog' : blogPost.title }}</span>
      </h2>

      <div class="blog-article-category-color"></div>
      <div class="blog-article-link">
        <nuxt-link :to="getBlogPostUrl()">Read</nuxt-link>
      </div>
    </div>
    <div
      class="blog-article-products"
      v-if="!homepage && showProducts && blogPost.products.length > 0"
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
    homepage: Boolean,
    blogPost: Object,
    showProducts: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getBlogPostImage() {
      return this.homapge ? this.blogPost.image_url : ''
    }
  },
  methods: {
    goToBlogPost() {
      this.$router.push(this.getBlogPostUrl())
    },
    getBlogPostUrl() {
      return this.homepage
        ? { name: 'blog' }
        : { name: 'blog-slug', params: { slug: this.blogPost.slug } }
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
      top: 90px;
      border-bottom: 430px solid #f5e6df;
      border-left: 130px solid transparent;
      border-right: 0 solid transparent;
      height: 0;
      width: calc(20% + 130px);
    }

    .blog-article-link {
      position: absolute;
      right: 4px;
      top: 440px;
      border-bottom: 88px solid #1d5353;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      height: 0;
      width: 94px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
      color: #fff;
      transform: rotate(36deg);
      transition: transform 0.2s ease;

      a {
        position: absolute;
        top: 29px;
        left: 0px;
        transform: rotate(-37deg);
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
      top: 186px;
      z-index: 10;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #000;
      margin-bottom: 20px;
      max-width: 600px;
      transition: color 0.5s ease;
      background-color: hsla(0, 0%, 100%, 0.3);
      padding: 10px;
      width: 100%;
      .black-bar {
        height: 2px;
        margin-right: 10px;
        background: black;
        width: 100%;
        flex-grow: 1;
      }
      span:not(.black-bar) {
        flex-grow: 0;
      }
    }

    &:hover {
      .blog-article-title {
        // color: #1d5353;
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
        border-bottom-width: 150px;
      }

      .blog-article-title {
        top: 60px;
        font-size: 14px;
        height: 56px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 74%;
        display: block;
      }
      .blog-article-link {
        top: 120px;
      }
    }
  }
}
</style>
