import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // nuxtはデフォルトがhistoryモード
  // historyモードは#(ハッシュ)によるアクセスではなく, パスを変更して遷移をする
  // その場合<nuxt-link>以外(更新ボタンやURLをアドレスバーに直打ち)で,
  // ページにアクセスしようとするとindex.htmlアクセスしないことになるので404になってしまう
  // generate.fallback = trueにすることで404の場合もindex.htmlにアクセスさせることができる
  // info) S3などにデプロイするときに404の場合はindex.htmlを配信する
  generate: {
    fallback: true,
    // fallback: 'my-fallback/file.html' // ホスティングサービスで特定のロケーションを指定する必要がある場合
  },

  router: {
    // name付きの子コンポーネントのルーティング
    extendRoutes (routes, resolve) {
      // `/naming` のルーティング
      const indexIndex = routes.findIndex(route => route.name === 'naming')
      // `/naming/xxxxx` のルーティング
      let index = routes[indexIndex].children.findIndex(route => route.name === 'naming-direction')
      // `/naming/xxxxx` にアクセスされた場合, component(nuxt-child)は以下のコンポーネントを使うように支持
      routes[indexIndex].children[index] = {
        ...routes[indexIndex].children[index],
        components: {
          default: routes[indexIndex].children[index].component,
          direction: resolve(__dirname, 'components/Direction.vue'),
        },
        chunkNames: {
          direction: 'components/Direction',
        }
      }
    }
  }
}
