module.exports = {
  title: 'Vuepress theme neptune',
  description: 'A nice dark vuepress theme made with vuetify 2.0',
  // theme: 'vuepress-theme-neptune',
  theme: require.resolve('../../theme-neptune'), // 使用本地主题
  themeConfig: {
    nav: {
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Vue', link: '/_posts/vue/' },
        { text: 'Laravel', link: '/_posts/laravel' }
      ],
      '/zh/': [
        { text: '首页', link: '/zh' },
        { text: 'Vue', link: '/zh/_posts/vue/' }
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
      title: 'Vuepress theme neptune',
      description: 'A nice dark vuepress theme made with vuetify 2.0',
      flag: '/img/en.png'
    },
    '/zh/': {
      lang: 'zh',
      name: '简体中文',
      title: 'vupresss黑色主题',
      description: '一个整洁简单的深色vuepress主题',
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
