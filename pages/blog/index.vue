<template>
  <div class="blog-articles">
    <div
      v-for="(article, id) in articles"
      :key="`article-${id}`"
      class="blog-article cursor-pointer"
      @click.prevent="goToArticle(article)"
    >
      <h3 class="blog-article-category">
        <span>{{ article.category.name }}</span>
      </h3>
      <div class="blog-article-image-container">
        <div
          class="blog-article-image"
          :style="{
            backgroundImage: 'url(' + getArticleImage(article) + ')'
          }"
        ></div>
      </div>
      <h2 class="blog-article-title">
        <span>{{ article.title }}</span>
      </h2>

      <div class="blog-article-category-color"></div>
      <div class="blog-article-link">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >Read</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-blog-articles', 'page-blog']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "Le Blog<br/>L'atelier Hair & Make Up"
    })
  },
  data() {
    return {
      articles: [
        {
          slug: 'comment-faire-son-masque-au-miel-pour-le-visage',
          title: 'Comment faire son masque au miel pour le visage ?',
          image: 'pot-miel.webp',
          category: {
            name: 'Catégorie 1',
            slug: 'category-1'
          }
        },
        {
          slug: 'comment-faire-son-masque-au-miel-pour-le-visage',
          title: 'Comment faire son masque au miel pour le visage ?',
          image: 'fresh-face-oil-elixir-creme-ancienne-avis.jpg',
          category: {
            name: 'Catégorie 1',
            slug: 'category-1'
          }
        },
        {
          slug: 'comment-faire-son-masque-au-miel-pour-le-visage',
          title: 'Comment faire son masque au miel pour le visage ?',
          image: 'pot-miel.webp',
          category: {
            name: 'Catégorie 2',
            slug: 'category-2'
          }
        }
      ]
    }
  },
  methods: {
    getArticleImage(article) {
      return require(`@/assets/img/blog/${article.image}`)
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
