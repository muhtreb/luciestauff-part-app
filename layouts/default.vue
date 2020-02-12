<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-nav">
          <nav class="header-nav-left">
            <nuxt-link to="/services">Services</nuxt-link>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </nav>
          <div class="header-nav-logo">
            <nuxt-link to="/">
              <img src="~/assets/img/logo-large.png" />
            </nuxt-link>
          </div>
          <nav class="header-nav-right">
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/shop">Shop</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </nav>
        </div>
      </div>
    </header>

    <div class="banner" :class="{ 'banner--hidden': !bannerShow }">
      <h1 v-if="bannerTitle" class="banner-title" v-html="bannerTitle"></h1>
    </div>

    <nuxt />

    <footer class="footer">
      <div class="container">
        <div class="flex">
          <div class="footer-instagram w-1/2">
            <h3 class="footer-instagram-title">
              <span>Instagram</span>
            </h3>
            <div class="footer-instagram-pictures">
              <a
                v-for="image in images"
                :key="`instagram-${image.id}`"
                :href="image.url"
                class="footer-instagram-picture"
                target="_blank"
              >
                <img :src="image.picture" />
              </a>
            </div>
          </div>
          <div class="footer-contact w-1/2">
            <h2 class="footer-contact-title">L'atelier Hair & Make Up</h2>
            <div class="footer-contact-details">
              Keep in touch<br />
              <a href="tel:">04 54 34 32 32</a><br />
              Melbourne Based<br />
              Worldwide Work<br />
            </div>
            <div class="footer-contact-social-links">
              <a href="">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'twitter']"/></fa-layer
              ></a>
              <a href="">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'facebook-f']"/></fa-layer
              ></a>
              <a href="">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'pinterest-p']"/></fa-layer
              ></a>
              <a href="">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'instagram']"/></fa-layer
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    bannerShow() {
      return this.$store.state.banner.show
    },
    bannerTitle() {
      return this.$store.state.banner.title
    },
    ...mapState('instagram', ['images'])
  },
  created() {
    this.$store.dispatch('instagram/getImages', {
      limit: 9
    })
  }
}
</script>
