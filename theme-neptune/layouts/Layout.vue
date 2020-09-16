<template>
  <v-app dark class="nep">
    <Header @toogle:sidebar="handleToggleSidebar" class="nep-header" />
    <Sidebar ref="sidebar" v-if="element !== 'Home'" class="nep-sidebar" />
    <ClientOnly>
      <component :is="element"></component>
    </ClientOnly>

    <Footer class="nep-footer" />
    <Fab />
  </v-app>
</template>

<script>
import Home from '@theme/components/Home'
import Article from '@theme/components/Article'
import Category from '@theme/components/Category'
import Timeline from '@theme/components/Timeline'
export default {
  data () {
    return {
      showDrawer: true,
      showToc: true
    }
  },
  components: { Home, Article, Category, Timeline },
  computed: {
    element () {
      const { layout, home } = this.$page.frontmatter
      return home === true ? 'Home' : layout || 'Article'
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'sidebar-open': this.shouldShowSidebar && this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  methods: {
    handleToggleSidebar () {
      const sidebar = this.$refs.sidebar
      sidebar.showDrawer = !sidebar.showDrawer
    }
  },
  mounted () {
    this.$vuetify.lang.current = this.$lang
  },
  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
