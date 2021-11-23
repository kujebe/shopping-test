export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shopping',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang:'css' },
    { src: './assets/theme.scss', lang:'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/vue-material.ts"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    "@nuxtjs/router-extras",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  axios: {
    baseURL: "http://localhost:3000",
    proxy: true,
    credentials: false
  },
  proxy: {
    '/api/shop': { target: process.env.API_URL || "http://localhost:3001", pathRewrite: {'^/api/shop/': ''} },
    '/api/cart': { target: process.env.API_URL || "http://localhost:3001", pathRewrite: {'^/api/cart/': ''} },
    '/api/user': { target: process.env.API_URL || "http://localhost:3001", pathRewrite: {'^/api/user/': ''} },
  },
  publicRuntimeConfig: {
    shopUrl: process.env.VUE_APP_SHOP_URL || "http://localhost:3000",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "lodash-es",
      "lodash-es/groupBy",
      "lodash-es/clone",
      "lodash-es/cloneDeep"
    ]
  },
}
