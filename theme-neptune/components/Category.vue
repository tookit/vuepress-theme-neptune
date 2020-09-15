<template>
  <v-main class="category__content">
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
            <v-list class="category_list" three-line>
              <template v-for="item in posts">
                <v-list-item
                  class="category_list__item"
                  :key="item.key"
                  :to="item.path"
                >
                  <v-list-item-avatar tile color="grey" size="80">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span class="caption hidden-md-and-up">{{
                        item.frontmatter.date
                      }}</span>
                      <v-chip
                        color="primary"
                        class="mr-2 hidden-xs-only"
                        label
                        outlined
                        v-for="tag in item.frontmatter.tags"
                        :key="tag"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="hidden-xs-only">
                    {{ item.frontmatter.date }}
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
        </template>
        <template v-else>
          <v-col
            :cols="12"
            :lg="4"
            :sm="12"
            v-if="posts.length"
            v-for="post in posts"
            :key="post.key"
          >
            <v-card ripple :to="post.path" tile>
              <v-img :src="computePostImage(post.frontmatter)"> </v-img>
              <v-card-text>
                <v-list two-line>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ post.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        <div class="mb-2 caption">
                          {{ post.frontmatter.date }}
                        </div>
                        <v-chip
                          color="primary"
                          class="mr-2"
                          label
                          small
                          outlined
                          v-for="tag in post.frontmatter.tags"
                          :key="tag"
                        >
                          {{ tag }}
                        </v-chip>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
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
