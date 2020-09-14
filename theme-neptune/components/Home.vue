<template>
  <v-main>
    <section class="home--section section">
      <v-container fluid fill-height class="text-md-center white--text">
        <v-row>
          <v-col>
            <img src="/img/logo.png" width="48" />
            <h1 class="mb-3 mt-3 display-3">{{ siteTitle }}</h1>
            <h3 class="title mt-3 mb-3">{{ siteDesc }}</h3>
            <v-btn color="white" large :href="startUrl">
              Getting Started
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <Content custom />
  </v-main>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      isSidebarOpen: true
    }
  },
  computed: {
    startUrl() {
      return '/_posts/vue/build-a-vuepress-theme-with-vuetify-ep1.html'
    },
    siteTitle() {
      return this.$site.locales[this.$localePath].title || this.$site.title
    },
    siteDesc() {
      return (
        this.$site.locales[this.$localePath].description ||
        this.$site.description
      )
    }
  },
  mounted() {},
  created() {}
}
</script>
<style lang="stylus" scoped>
.home--section {
  .container {
    min-height: calc(100vh - 64px);
    background-color: #212121;
  }
}
</style>
