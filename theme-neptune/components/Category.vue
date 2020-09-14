<template>
  <v-main class="category--content">
    <v-sheet color="grey darken-4" dark class="py-10 px-5">
      <v-toolbar dark tag="div" tile flat color="grey darken-4">
        <v-toolbar-title>{{ $page.title }}</v-toolbar-title>
        <v-spacer />
        <v-btn-toggle
          v-model="viewMode"
          tile
          dense
          color="deep-purple accent-3"
        >
          <v-btn tile icon value="grid">
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn tile icon value="list">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar>
    </v-sheet>
    <v-container>
      <v-row>
        <template v-if="viewMode === 'list'">
          <v-col cols="12">
            <v-list three-line>
              <template v-for="item in posts">
                <v-list-item :key="item.key" :to="item.path">
                  <v-list-item-avatar tile color="grey" size="80">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.frontmatter.date }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
        </template>
        <template v-else>
          <v-col
            cols="4"
            v-if="posts.length"
            v-for="post in posts"
            :key="post.key"
          >
            <v-card ripple :to="post.path" tile>
              <v-img :src="computePostImage(post.frontmatter)" />
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ post.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ post.frontmatter.date }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      showDrawer: true,
      viewMode: 'grid'
    }
  },
  computed: {
    posts() {
      return this.$site.pages.filter((page) => {
        const { frontmatter } = page
        return (
          frontmatter.category === this.$frontmatter.category &&
          frontmatter.layout !== 'Category'
        )
      })
    }
  },
  methods: {
    handleToggleSideBar() {
      this.showDrawer = !this.showDrawer
    },
    computePostImage(frontmatter) {
      return frontmatter.image || '/img/mock.png'
    }
  },
  mounted() {},
  created() {}
}
</script>

<style lang="stylus"></style>
