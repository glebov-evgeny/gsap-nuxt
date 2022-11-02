process.env.DEBUG = 'nuxt:*';

export default {
  debug: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GSAP/NUXT',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { name: 'theme-color', content: '#fff' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'favicon.ico' },
    ],
    script: [
      { hid: 'emailsender', src: '//cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js', defer: true },
    ],
  },
  router: {
    base: '/gsap-nuxt/',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/styles/main.scss', 'swiper/css/swiper.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/emailsender', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/gtm-module
    // '@nuxtjs/gtm',
    // https://www.npmjs.com/package/nuxt-facebook-pixel-module
    // 'nuxt-facebook-pixel-module',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyByz0NfPnOyBfRjvCoEUmfwiKLPqeLMU3w',
          authDomain: 'gsup-nuxt.firebaseapp.com',
          projectId: 'gsup-nuxt',
          storageBucket: 'gsup-nuxt.appspot.com',
          messagingSenderId: '227979751457',
          appId: '1:227979751457:web:4fce469f14a79f5c403360',
        },
        services: {
          auth: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    debug: false,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },
  loading: '~/components/_ui/a_loader/a_loader.vue',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },

  env: {
    SITE_FB_PIXEL: process.env.SITE_FB_PIXEL,
    SITE_GTM: process.env.SITE_GTM,
  },

  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
  },

  // robots.txt
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '*',
  },

  // GTM
  gtm: {
    id: process.env.SITE_GTM,
  },

  // Facebook pixel
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.SITE_FB_PIXEL,
    autoPageView: true,
    disabled: false,
  },
};
