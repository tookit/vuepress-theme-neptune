<template>
  <v-app class="theme">
    <Header @toogle:sidebar="handleToggleSidebar" />
    <Sidebar ref="sidebar" v-if="element !== 'Home'" />
    <ClientOnly>
      <component :is="element"></component>
    </ClientOnly>

    <Footer />
  </v-app>
</template>

<script>
import Home from '@theme/components/Home'
import Article from '@theme/components/Article'
import Category from '@theme/components/Category'
export default {
  data() {
    return {
      showDrawer: true,
      showToc: true
    }
  },
  components: { Home, Article, Category },
  computed: {
    element() {
      const { layout, home } = this.$page.frontmatter
      return home === true ? 'Home' : layout || 'Article'
    },
    pageClasses() {
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
    handleToggleSidebar() {
      const sidebar = this.$refs.sidebar
      sidebar.showDrawer = !sidebar.showDrawer
    }
  },
  mounted() {
    this.$vuetify.lang.current = this.$lang
  },
  created() {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
