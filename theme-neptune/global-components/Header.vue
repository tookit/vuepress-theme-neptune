<template>
  <v-app-bar dark app clipped-left>
    <v-app-bar-nav-icon @click="$emit('toogle:sidebar')" v-if="!isHome" />
    <router-link to="/">
      <v-img
        alt="Logo"
        src="/img/logo.png"
        contain
        transition="scale-transition"
        height="24px"
        width="24px"
      />
    </router-link>
    <v-toolbar-title class="ml-0 pl-3">
      <span>{{ siteTitle }}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn v-for="item in navLinks" :to="item.link" :key="item.text">
        {{ item.text }}</v-btn
      >
      <LanguageSwitch :locales="locales" />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    navLinks() {
      const { nav } = this.$site.themeConfig
      return nav[this.$localePath]
    },
    isHome() {
      return this.$page.frontmatter.home
    },
    locales() {
      return this.$site.locales || this.$site.themeConfig.locales
    },
    siteTitle() {
      return this.$site.title
    }
  },
  created() {}
}
</script>

<style></style>
