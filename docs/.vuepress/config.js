module.exports = {
  title: 'Tookit',
  description: "📦 🎨 Tookit's blog",
  // theme: 'vuepress-theme-neptune',
  theme: require.resolve('../../theme-neptune'), // 使用本地主题
  themeConfig: {
    nav: {
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Vue', link: '/_posts/vue' }
      ],
      '/zh/': [
        { text: '首页', link: '/zh' },
        { text: 'Vue', link: '/zh/_post/vue' }
      ]
    },
    sidebar: {},
    valine: {
      appId: 'dFNEgQoCyMKnaV5FIR137JsC-gzGzoHsz',
      appKey: '38ehraSP02NclWAHpTIpVl77'
    }
  },
  locales: {
    '/': {
      lang: 'en',
      name: 'English',
      title: 'Tookit',
      description: 'Tookit personal blog',
      flag: '/img/en.png'
    },
    '/zh/': {
      lang: 'zh',
      name: '简体中文',
      title: 'Tookit',
      description: 'Tookit 个人站点',
      flag: '/img/zh.png'
    }
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-3881136-7'
      }
    ]
  ]
}
