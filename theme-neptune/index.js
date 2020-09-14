const path = require('path')
// Theme API.
module.exports = (options, ctx) => {
  const { sep } = path
  const { themeConfig, siteConfig, sourceDir } = ctx
  // resolve algolia
  const isAlgoliaSearch =
    themeConfig.algolia ||
    Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
      (base) => themeConfig.locales[base].algolia
    )

  return {
    configureWebpack: (config) => {},
    chainWebpack: (config) => {
      config.module
        .rule('sass')
        .oneOf('normal')
        .use('sass-loader')
        .loader('sass-loader')
        .options({
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          }
        })
        .end()
    },
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js'),
        '@docs': `${sourceDir}${sep}.vuepress${sep}styles`
      }
    },
    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/plugin-search',
      '@vuepress/plugin-nprogress',
      [
        'container',
        {
          type: 'tip',
          defaultTitle: {
            '/': 'Tip'
          }
        }
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'warning',
          defaultTitle: {
            '/': 'WARNING'
          }
        }
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'danger',
          defaultTitle: {
            '/': 'WARNING'
          }
        }
      ]
    ]
  }
}
