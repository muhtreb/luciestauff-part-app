<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about">
          <nav class="about-nav">
            <a
              href="#"
              class="about-nav-link"
              @click.prevent="showAbout(index)"
              :class="{ 'about-nav-link--active': aboutNav === index }"
              v-for="(section, index) in servicesData.about.sections"
              :key="index"
              >{{ section.title }}</a
            >
          </nav>
          <div class="about-content-wrapper">
            <h2 class="about-content-title">Services</h2>
            <div class="about-content">
              <div
                v-for="(section, index) in servicesData.about.sections"
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
              <span>Services</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="container">
        <h2 class="title title--right-lined">
          <span>My Work</span>
        </h2>
      </div>

      <PortfolioSlider></PortfolioSlider>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import PortfolioSlider from '@/components/PortfolioSlider'

export default {
  components: { PortfolioSlider },
  async asyncData({ app, params, store, $axios, $payloadURL, route }) {
    if (process.static && process.client && $payloadURL) {
      return $axios.$get($payloadURL(route))
    }

    await store.dispatch('data/getServicesData')
    return {
      servicesData: store.state.data.services
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
  }
}
</script>
