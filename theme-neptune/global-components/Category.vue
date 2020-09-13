<template>
  <v-app class="category--layout">
    <Header @toogle:sidebar="handleToggleSideBar" />
    <Sidebar :show-drawer="showDrawer" />
    <v-main class="category--content">
      <v-sheet color="grey darken-4" dark class="py-10 px-5">
        <v-toolbar dark tag="div" tile flat color="grey darken-4">
          <v-toolbar-title>{{ $page.title }}</v-toolbar-title>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>
      </v-sheet>
      <v-container>
        <v-row>
          <v-col
            cols="6"
            v-if="posts.length"
            v-for="post in posts"
            :key="post.key"
          >
            <v-card ripple :to="post.path" tile>
              <v-img
                v-show="post.frontmatter.image"
                :src="post.frontmatter.image"
              />
              <v-card-title>{{ post.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      showDrawer: true,
      viewMode: 'grid',
    }
  },
  computed: {
    posts() {
      return this.$site.pages.filter(page => {
        const { frontmatter } = page
        return (
          frontmatter.category === this.$frontmatter.category &&
          frontmatter.layout !== 'Category'
        )
      })
    },
  },
  methods: {
    handleToggleSideBar() {
      this.showDrawer = !this.showDrawer
    },
  },
  mounted() {},
  created() {},
}
</script>

<style lang="stylus"></style>
