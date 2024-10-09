export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'todo-microfrontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3001, 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: true,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
    },
  },
}
