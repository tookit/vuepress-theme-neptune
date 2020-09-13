<template>
  <div class="theme__container" :class="pageClasses">
    <component :is="element"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
    }
  },
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
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ]
    },
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
  },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
