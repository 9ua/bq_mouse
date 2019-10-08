
export default {
  
  mode: 'spa',

  srcDir: 'src',
  
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet',href:'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }
    ]
  },
  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 一般的使用方式
    '@nuxtjs/google-gtag',
    // 如果你想要自訂一些選項，就可以這樣寫
    ['@nuxtjs/google-gtag', { /* module options */ }],
  ],
    // 開始加入GA code
    'google-gtag':{
      id: 'UA-146595703-1', // 必填，請填寫剛申請到的追蹤碼ID
      config:{
        // 這裡是填寫對gtag的需求選項」
        anonymize_ip: true, 
        send_page_view: false, // 避免頁面刷新時後的重複追蹤
        linker:{ // 跨域追蹤，追蹤兩個相關但不同網域的頁面
          domains:['domain.com','domain.org']
        }
      },
      debug: true, // 允許在開發中進行追蹤
      disableAutoPageTrack: false // 關閉追蹤每個頁面路由
    },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}