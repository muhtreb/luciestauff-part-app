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

      <PortfolioSlider></PortfolioSlider>
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

export default {
  components: { PortfolioSlider, TestimonialSlider },
  async asyncData({ app, params, store, $axios, $payloadURL, route }) {
    if (process.static && process.client && $payloadURL) {
      return $axios.$get($payloadURL(route))
    }

    await Promise.all([store.dispatch('testimonial/getTestimonials')])

    return {
      testimonials: store.state.testimonial.testimonials
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
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Services'
    })
  },
  methods: {
    showAbout(nav) {
      this.aboutNav = nav
    },
    getAboutPicture() {
      return require(`@/assets/img/21.jpg`)
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
