<template>
  <v-main class="article__content" :class="tocClass">
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
        <v-col cols="12">
          <v-card tile flat>
            <v-card-text>
              <Content custom class="article content" />
              <valine />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"><h3>Up next</h3></v-col>
        <v-col cols="4" v-for="item in related" :key="item.key">
          <v-card :to="item.path">
            <v-img
              src="https://lh3.googleusercontent.com/jVMv31N6GhGaTMtzQoTigSNGhbMGVyk63O0QW1ofzoIG4jAcjCTt9pZublyL2m_XeQS68FpqjBCGB1lG-R1-4tcWu5sWsHrQBNdx"
            />
            <v-card-title>{{ item.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      showDrawer: true,
      showToc: true
    }
  },
  computed: {
    tocClass() {
      return {
        toc: this.showToc
      }
    },
    related() {
      return this.$site.pages.filter((page) => {
        const { frontmatter } = page
        return (
          frontmatter.category === this.$frontmatter.category &&
          frontmatter.layout !== 'Category' &&
          page.key !== this.$page.key
        )
      })
    }
  },
  methods: {
    handleToggleSideBar() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>
