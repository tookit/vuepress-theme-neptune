---
title: 'Build a vuepress theme with vuetify'
lang: en-US
category: Vue
layout: Article
tags:
- vue
- vuepress
- vuetify
- theme
date: '2019-12-12'
---

If we want to integrate vuetify with vuepress, we need configure vupress webpack-chain to enable load vuetiy's sass/scss file.

More details please check
([Vuetify quick start](https://vuetifyjs.com/en/getting-started/quick-start/))

## Requirement
- sass
- sass-loader
- fibers

## Theme Structure

Just follow the offical doc, how to [Writing a them](https://vuepress.vuejs.org/theme/writing-a-theme.html)

``` bash
theme
├── `global-components`
│   └── xxx.vue
├── `components`
│   └── xxx.vue
├── `layouts`
│   ├── Layout.vue _(**Mandatory**)_
│   └── 404.vue
├── `styles`
│   ├── index.styl
│   └── palette.styl
├── `templates`
│   ├── dev.html
│   └── ssr.html
├── `index.js`
├── `enhanceApp.js`
└── package.json
```
## Key Point

The main issue is to configure webpack-chain to load `sass/scss` file

```javascript {4}
// theme/index.js
const path = require('path')
// Theme API.
module.exports = (options, ctx) => {
  return {
    chainWebpack: config => {
      config.module
        .rule('sass')
        .oneOf('normal')
        .use('sass-loader')
        .loader('sass-loader')
        .options({
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true, // optional
          },
        })
        .end()
    },
    ...
  }
}

```

## Import vuetify

Import the vuetify components/directives that which we need in the theme

```javascript
import Vuetify, {
  VApp,
  VNavigationDrawer,
 ...
} from 'vuetify/lib'
import './style/theme.sass'
import { Ripple, Scroll } from 'vuetify/lib/directives'
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/en'
import postsMixin from '@theme/mixins/posts'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      ...
    },
    directives: {
      Ripple,
      Scroll,
    },
  })
  options.vuetify = new Vuetify({
    lang: {
      locales: { zhHans, en },
      current: 'en',
    },
  })
}
```

