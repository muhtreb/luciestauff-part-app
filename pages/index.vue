<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about-picture">
          <img src="~/assets/img/profile.jpg" />
        </div>
        <nav class="about-nav">
          <a
            href="#"
            class="about-nav-link"
            @click.prevent="showAbout(index)"
            :class="{ 'about-nav-link--active': aboutNav === index }"
            v-for="(section, index) in settings.homepage.about.sections"
            :key="index"
            >{{ section.title }}</a
          >
        </nav>
        <div class="about-content-wrapper">
          <h2 class="about-content-title">About L'atelier</h2>
          <div class="about-content">
            <div
              v-for="(section, index) in settings.homepage.about.sections"
              :key="index"
              class="wysiwyg"
            >
              <div
                v-if="aboutNav === index"
                v-html="toMarkdown(section.content)"
              ></div>
            </div>
          </div>
          <div class="about-content-sign">
            <img src="~/assets/img/sign.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="banner banner--homepage-services">
      <h2 class="banner-title">Services</h2>
    </div>

    <div class="container">
      <div class="services">
        <h3 class="services-title">
          We do make up & hair fashion every<br />
          special occasion
        </h3>
      </div>
    </div>

    <div class="portfolio">
      <h2 class="title title--right-lined">
        <span>Portfolio</span>
      </h2>

      <PortfolioSlider
        :portfolio-category="sliderPortfolioCategory"
      ></PortfolioSlider>
    </div>

    <div class="blog">
      <div class="container">
        <h2 class="title"><span>Blog</span></h2>
        <BlogPost
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :blog-post="blogPost"
          :show-products="false"
        ></BlogPost>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'
import BlogPost from '@/components/BlogPost'
import PortfolioSlider from '@/components/PortfolioSlider'

export default {
  components: { BlogPost, PortfolioSlider },
  head() {
    return {
      bodyAttrs: {
        class: ['page-homepage']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "L'atelier hair & make up",
      slider: true,
      sliderImages: this.bannerPortfolioCategory.images
    })
  },
  async asyncData({ app, params, store, $payloadURL, $axios, route }) {
    if (process.static && process.client && $payloadURL) {
      return $axios.$get($payloadURL(route))
    }

    const res = await Promise.all([
      store.dispatch('blog/getBlogPosts', {
        per_page: 1,
        sort_by: ['created_at'],
        sort_desc: [true]
      }),
      app.$portfolioRepository.getPortfolioCategoryBySlug('homepage-portfolio'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('homepage-banner')
    ])

    return {
      blogPosts: store.state.blog.blogPosts,
      sliderPortfolioCategory: res[1].data,
      bannerPortfolioCategory: res[2].data
    }
  },
  data() {
    return {
      aboutNav: 0
    }
  },
  methods: {
    showAbout(nav) {
      this.aboutNav = nav
    },
    toMarkdown(value) {
      return value ? marked(value) : ''
    }
  },
  computed: {
    ...mapState('setting', ['settings'])
  }
}
</script>
