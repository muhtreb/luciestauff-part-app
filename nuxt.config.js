const env = require('dotenv').config()
import axios from 'axios'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Lucie Stauff',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/scss/app.scss', lang: 'sass' },
    {
      src: 'slick-carousel/slick/slick.css',
      lang: 'css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/masonry', ssr: false },
    { src: '~/plugins/carousel', ssr: false },
    '~/plugins/api',
    { src: '~/plugins/validation', ssr: false },
    { src: '~/plugins/datetime', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: ['faBars', 'faTimes', 'faVideo'],
          regular: ['faStar', 'faImages'],
          brands: ['faTwitter', 'faFacebookF', 'faInstagram', 'faPinterestP']
        }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],

  purgeCSS: {
    enabled: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_BASE_URL,
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  generate: {
    routes: async () => {
      const client = axios.create({
        baseURL: process.env.API_BASE_URL
      })
      const routes = []

      const [
        responsePortfolioCategories,
        responseBlogCategories,
        responseShopCategories,
        responseBlogPosts
      ] = await Promise.all([
        client.get(`/portfolio/categories`),
        client.get(`/blog/categories`),
        client.get(`/product/categories`),
        client.get(`/blog/posts`)
      ])

      const portfolioCategoriesRoutes = responsePortfolioCategories.data.data.map(
        (portfolioCategory) => {
          return {
            route: '/portfolio/category/' + portfolioCategory.slug,
            payload: portfolioCategory
          }
        }
      )

      const blogCategoriesRoutes = responseBlogCategories.data.data.map(
        (blogCategory) => {
          return '/blog/category/' + blogCategory.slug
        }
      )

      const shopCategoriesRoutes = responseShopCategories.data.data.map(
        (shopCategory) => {
          return '/shop/category/' + shopCategory.slug
        }
      )

      const blogPostsRoutes = responseBlogPosts.data.data.map((blogPost) => {
        return '/blog/' + blogPost.slug
      })

      return [
        ...portfolioCategoriesRoutes,
        ...blogCategoriesRoutes,
        ...shopCategoriesRoutes,
        ...blogPostsRoutes
      ]
    }
  }
}
