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
              <img src="~/assets/img/logo-large.png" />
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
          </nav>
        </div>

        <div class="header-nav header-nav--mobile">
          <div class="header-nav-logo">
            <nuxt-link to="/">
              <img src="~/assets/img/logo-large.png" />
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

    <div class="banner" :class="{ 'banner--hidden': !bannerShow }">
      <h1 v-if="bannerTitle" class="banner-title" v-html="bannerTitle"></h1>
    </div>

    <div class="content-wrapper">
      <nuxt />
    </div>

    <footer class="footer">
      <div class="container">
        <div class="flex flex-wrap flex-col-reverse desktop:flex-row">
          <div class="footer-instagram w-full desktop:w-1/2 mt-10 desktop:mt-0">
            <h3 class="footer-instagram-title">
              <span>Instagram</span>
            </h3>
            <div class="footer-instagram-pictures">
              <a
                v-for="image in instagramImages"
                :key="`instagram-${image.id}`"
                :href="image.url"
                class="footer-instagram-picture"
                target="_blank"
              >
                <img :src="image.picture" />
              </a>
            </div>
          </div>
          <div class="footer-contact w-full desktop:w-1/2 ">
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
export default {
  async asyncData({ store }) {
    await store.dispatch('instagram/getImages', {
      limit: 9
    })
    return {
      instagramImages: store.instagram.images
    }
  },
  data() {
    return {
      instagramImages: [],
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
        {
          title: 'Shop',
          route: { name: 'shop' },
          right: true
        },
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
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>
