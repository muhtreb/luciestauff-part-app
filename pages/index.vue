<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about-picture">
          <img :src="settings.homepage.about.profile_picture_url" />
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

    <div
      class="banner banner--homepage-services"
      :style="{
        backgroundImage: `url(${settings.homepage.services.banner_picture_url})`
      }"
    >
      <h2 class="banner-title">Services</h2>
    </div>

    <div class="container">
      <div class="services">
        <h3 class="services-title" v-html="getServicesContent"></h3>
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
        <BlogPost :homepage="true"></BlogPost>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import nl2br from 'nl2br'
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
      sliderMedias: this.bannerPortfolioCategory.medias
    })
  },
  async asyncData({ app, params, store }) {
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
    ...mapState('setting', ['settings']),
    getServicesContent() {
      return nl2br(this.settings.homepage.services.content)
    }
  }
}
</script>
