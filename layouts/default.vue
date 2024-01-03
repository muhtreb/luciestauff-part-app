<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-nav header-nav--desktop">
          <nav class="header-nav-left">
            <nuxt-link
              v-for="(menuItem, index) in leftMenuItems"
              :to="menuItem.route"
              :key="index"
              @click.native="showMobileMenu = false"
              >{{ menuItem.title }}</nuxt-link
            >
          </nav>
          <div class="header-nav-logo">
            <nuxt-link to="/">
              <img src="~/assets/img/logo.png" />
            </nuxt-link>
          </div>
          <nav class="header-nav-right">
            <nuxt-link
              v-for="(menuItem, index) in rightMenuItems"
              :to="menuItem.route"
              :key="index"
              @click.native="showMobileMenu = false"
              >{{ menuItem.title }}</nuxt-link
            >

            <div class="header-social-links">
              <a v-if="getTwitterUrl()" :href="getTwitterUrl()">
                <fa :icon="['fab', 'twitter']"
              /></a>
              <a v-if="getFacebookUrl()" :href="getFacebookUrl()">
                <fa :icon="['fab', 'facebook-f']"
              /></a>
              <a v-if="getPinterestUrl()" :href="getPinterestUrl()">
                <fa :icon="['fab', 'pinterest-p']"
              /></a>
              <a v-if="getInstagramUrl()" :href="getInstagramUrl()">
                <fa :icon="['fab', 'instagram']"
              /></a>
            </div>
          </nav>
        </div>

        <div class="header-nav header-nav--mobile">
          <div class="header-nav-logo">
            <nuxt-link to="/">
              <img src="~/assets/img/logo.png" />
            </nuxt-link>
          </div>
          <a
            href="#"
            class="header-nav-button"
            @click.prevent="toggleMobileMenu()"
          >
            <fa-layer class="fa-2x">
              <fa :icon="showMobileMenu ? ['fas', 'times'] : ['fas', 'bars']"
            /></fa-layer>
          </a>
          <nav
            class="header-nav-mobile-menu"
            :class="{ 'header-nav-mobile-menu--visible': showMobileMenu }"
          >
            <nuxt-link
              v-for="(menuItem, index) in menuItems"
              :to="menuItem.route"
              :key="index"
              @click.native="showMobileMenu = false"
              >{{ menuItem.title }}</nuxt-link
            >
          </nav>
        </div>
      </div>
    </header>

    <div class="header-separator"></div>

    <!-- <div
      class="banner"
      :class="{ 'banner--hidden': !bannerShow }"
      v-if="!bannerSlider"
    >
      <h1 v-if="bannerTitle" class="banner-title" v-html="bannerTitle"></h1>
      <h2
        v-if="bannerSubtitle"
        class="banner-subtitle"
        v-html="bannerSubtitle"
      ></h2>
    </div> -->

    <BannerSlider
      :show="bannerShow"
      :title="bannerTitle"
      :subtitle="bannerSubtitle"
      :medias="bannerSliderMedias"
    ></BannerSlider>

    <div class="content-wrapper">
      <nuxt />
    </div>

    <footer class="footer">
      <div class="container">
        <div class="flex flex-wrap flex-col-reverse desktop:flex-row">
          <div class="footer-contact w-full desktop:w-1/2 ">
            <h2 class="footer-contact-title">L'atelier Hair & Make-Up</h2>
            <div class="footer-contact-details">
              Keep in touch<br />
              <a :href="`tel:${getPhoneNumber()}`">{{ getPhoneNumber() }}</a
              ><br />
              Melbourne Based<br />
              Worldwide Work<br />
            </div>
            <div class="footer-contact-social-links">
              <a v-if="getTwitterUrl()" :href="getTwitterUrl()">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'twitter']"/></fa-layer
              ></a>
              <a v-if="getFacebookUrl()" :href="getFacebookUrl()">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'facebook-f']"/></fa-layer
              ></a>
              <a v-if="getPinterestUrl()" :href="getPinterestUrl()">
                <fa-layer class="fa-2x">
                  <fa :icon="['fab', 'pinterest-p']"/></fa-layer
              ></a>
              <a v-if="getInstagramUrl()" :href="getInstagramUrl()">
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

import BannerSlider from '@/components/BannerSlider'
export default {
  components: { BannerSlider },
  data() {
    return {
      showMobileMenu: false,
      menuItems: [
        {
          title: 'Services',
          route: { name: 'services' },
          left: true
        },
        {
          title: 'Portfolio',
          route: { name: 'portfolio' },
          left: true
        },
        {
          title: 'Blog',
          route: { name: 'blog' },
          right: true
        },
        /*
        {
          title: 'Shop',
          route: { name: 'shop' },
          right: true
        },
        */
        {
          title: 'Contact',
          route: { name: 'contact' },
          right: true
        }
      ]
    }
  },
  computed: {
    leftMenuItems() {
      return this.menuItems.filter((el) => el.left)
    },
    rightMenuItems() {
      return this.menuItems.filter((el) => el.right)
    },
    bannerShow() {
      return this.$store.state.banner.show
    },
    bannerTitle() {
      return this.$store.state.banner.title
    },
    bannerSubtitle() {
      return this.$store.state.banner.subtitle
    },
    bannerSlider() {
      return this.$store.state.banner.slider
    },
    bannerSliderMedias() {
      return this.$store.state.banner.sliderMedias
    },
    ...mapState('setting', ['settings'])
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    getFacebookUrl() {
      return this.settings.facebook_url || ''
    },
    getTwitterUrl() {
      return this.settings.twitter_url || ''
    },
    getPinterestUrl() {
      return this.settings.pinterest_url || ''
    },
    getInstagramUrl() {
      return this.settings.instagram_url || ''
    },
    getPhoneNumber() {
      return this.settings.phone_number || ''
    },
    playVideo(index) {
      this.$refs[`video-${index}`][0].play()
    },
    pauseVideo(index) {
      this.$refs[`video-${index}`][0].pause()
    }
  }
}
</script>
