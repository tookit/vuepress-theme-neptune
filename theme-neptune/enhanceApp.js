import Vuetify, {
  VApp,
  VNavigationDrawer,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VMain,
  VContainer,
  VRow,
  VCol,
  //
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSheet,
  VBreadcrumbs,
  //
  VImg,
  VList,
  VListItem,
  VListGroup,
  VListItemContent,
  VListItemTitle,
  VBtn,
  VMenu,
  VMenuTransition,
  VIcon,
  //
  VSubheader,
  VSpacer,
  VDivider,
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
  // console.log(siteData, options)
  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VAppBar,
      VAppBarNavIcon,
      VToolbar,
      VToolbarItems,
      VToolbarTitle,
      VMain,
      VContainer,
      VRow,
      VCol,
      //
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VSheet,
      VBreadcrumbs,
      //
      VSubheader,
      VImg,
      VList,
      VListItem,
      VListGroup,
      VListItemContent,
      VListItemTitle,
      VBtn,
      VMenu,
      VMenuTransition,
      VIcon,
      VSpacer,
      VDivider,
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

  Vue.mixin(postsMixin)
}
