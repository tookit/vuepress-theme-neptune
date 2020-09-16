---
title: '如何使用vuetify2.0创建vuepress主题'
lang: zh
category: Vue
layout: Article
tags:
- vue
- vuepress
- vuetify
- theme
date: '2019-12-12'
---

由于vuetify是使用`sass/scss`样式预处理,所以我们如果想要集成vuetify到vuepress, 我们首先得解决`sass/scss`的加载问题

Vuetify2.0的webpack配置参考
([Vuetify quick start](https://vuetifyjs.com/en/getting-started/quick-start/))

## 环境依赖
- sass
- sass-loader
- fibers
- vuetify

## 主题目录结构

详情请参考 [Writing a them](https://vuepress.vuejs.org/theme/writing-a-theme.html)

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
## 关键点

我们上面已经谈到了，关键是配置webpack以处理`sass/scss`

完整代码
[theme-neptune/index.js] (https://github.com/tookit/vuepress-theme-neptune/blob/master/theme-neptune/index.js)

```javascript
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

## 导入vuetify

现在我们可以调整`enhanceApp.js`, 导入我们需要的组件,指令

完整代码
[theme-neptune/enhanceApp.js] (https://github.com/tookit/vuepress-theme-neptune/blob/master/theme-neptune/enhanceApp.js)


```javascript
//enhanceApp.js
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

