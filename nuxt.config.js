export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: process.env.NETLIFY !== undefined,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Set loading animation
  // https://nuxtjs.org/docs/features/loading/
  loading: false,

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#114a4f',
    background: 'white'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'trinh-app',
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
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Mohave:wght@400;500&family=Roboto:wght@300;400;500&display=swap',
        rel: 'stylesheet'
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // This files compiles Bootstrap with our overridden variables.
  css: ['@/assets/scss/_bootstrap.scss'],

  // @nuxtjs/style-resources configuration
  // Doc: https://github.com/nuxt-community/style-resources-module
  //
  // This module will import the below scss files in all of our scss files,
  // so that we don't need to import them separately.
  styleResources: {
    scss: [
      // Import bootstrap files including our own bootstrap overrides.
      '~/assets/scss/_bootstrap-overrides.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss',

      // Include our own variables and mixins, etc.
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss'
    ],
    hoistUseStatements: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  eslint: {
    fix: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt', { icons: true }],
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://content.nuxtjs.org
    '@nuxt/content',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Bootstrap Vue configuration.
  // Exclude the CSS so that we can replace it with our compiled version.
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // We'll use separate CSS files so that the html is not cluttered.
    // This is good for the front page, which should be SEO friendly.
    // https://nuxtjs.org/api/configuration-build/#extractcss
    extractCSS: process.env.NETLIFY !== undefined,

    // Disable Dart SASS Warnings
    // https://stackoverflow.com/questions/67812380/disable-dart-sass-warnings-produced-by-external-theme-file
    loaders: {
      scss: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  }
}
