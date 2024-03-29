<template>
  <div>
    <div class="container">
      <div class="about">
        <nav class="about-nav">
          <a
            href="#"
            class="about-nav-link"
            @click.prevent="showAbout(index)"
            :class="{ 'about-nav-link--active': aboutNav === index }"
            v-for="(section, index) in settings.services.about.sections"
            :key="index"
            >{{ section.title }}</a
          >
        </nav>
        <div class="about-content-wrapper">
          <h2 class="about-content-title">Services</h2>
          <div class="about-content">
            <div
              v-for="(section, index) in settings.services.about.sections"
              :key="index"
              class="wysiwyg"
            >
              <div
                v-if="aboutNav === index"
                v-html="toMarkdown(section.content)"
              ></div>
            </div>
          </div>
        </div>
        <div class="about-picture">
          <div class="about-picture-image-container">
            <div
              class="about-picture-image"
              :style="{
                backgroundImage: 'url(' + getAboutPicture() + ')'
              }"
            />
          </div>
          <div class="about-picture-category-color"></div>
          <h2 class="about-picture-title">
            <span class="black-bar"></span>
            <span>Services</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <h2 class="title title--right-lined">
        <span>My Work</span>
      </h2>

      <PortfolioSlider
        :portfolio-category="portfolioCategory"
      ></PortfolioSlider>
    </div>

    <div class="testimonial">
      <div class="container">
        <h2 class="title">
          <span>Testimonials</span>
        </h2>
        <TestimonialSlider
          class="testimonial-slider"
          :testimonials="testimonials"
        ></TestimonialSlider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'
import PortfolioSlider from '@/components/PortfolioSlider'
import TestimonialSlider from '@/components/TestimonialSlider'
import SEO from '@/components/SEO'

export default {
  mixins: [SEO],
  components: { PortfolioSlider, TestimonialSlider },
  async asyncData({ app, params, store }) {
    const res = await Promise.all([
      store.dispatch('testimonial/getTestimonials'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('services-portfolio'),
      app.$portfolioRepository.getPortfolioCategoryBySlug('services-banner')
    ])

    return {
      testimonials: store.state.testimonial.testimonials,
      portfolioCategory: res[1].data,
      bannerPortfolioCategory: res[2].data
    }
  },
  data() {
    return {
      aboutNav: 0
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: ['page-services']
      },
      title: this.getSeoTitle('Services')
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Services',
      slider: true,
      sliderMedias: this.bannerPortfolioCategory.medias
    })
  },
  methods: {
    showAbout(nav) {
      this.aboutNav = nav
    },
    getAboutPicture() {
      return this.settings.services.about.picture_url
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
