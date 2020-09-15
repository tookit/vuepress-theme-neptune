<template>
  <v-main class="article__content" :class="tocClass">
    <v-sheet color="grey darken-4" dark class="py-10 px-5">
      <v-toolbar extended dark tag="div" tile flat color="grey darken-4">
        <v-toolbar-title>
          <h2>
            {{ $page.title }}
          </h2>
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div slot="extension" class="post-meta">
          <v-chip outlined label icon>
            <v-icon class="mr-2">mdi-calendar</v-icon>
            {{ $page.frontmatter.date }}
          </v-chip>
          <v-chip class="mr-2" label outlined v-for="item in tags" :key="item">
            {{ item }}
          </v-chip>
        </div>
      </v-toolbar>
    </v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card tile flat>
            <v-card-text>
              <Content custom class="article content" />
              <valine class="article__comments" />
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Related article -->
        <v-col cols="12"
          ><h3 class="mb-2">Up next</h3>
          <v-divider />
        </v-col>
        <v-col cols="6" v-for="item in related" :key="item.key">
          <template v-if="item.frontmatter.image">
            <v-card tile :to="item.path">
              <v-img :src="item.frontmatter.image" />
              <v-card-title class="subtitle-1">{{ item.title }}</v-card-title>
            </v-card>
          </template>
          <template v-else>
            <v-card>
              <v-list two-line class="pa-0">
                <v-list-item :to="item.path">
                  <v-list-item-avatar color="grey darken-4" tile>
                    <span class="white--text">
                      {{ item.title.charAt(0) }}
                    </span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.frontmatter.date }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
    <template v-if="!showToc">
      <v-btn
        small
        fab
        dark
        fixed
        tile
        right="right"
        class="btn_toc"
        color="primary"
        @click="showToc = true"
      >
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-navigation-drawer
        style="padding-top: 64px"
        right
        fixed
        clipped
        width="200px"
        v-model="showToc"
      >
        <Toc />
      </v-navigation-drawer>
    </template>
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
        article_toc: this.showToc
      }
    },
    tags() {
      const { frontmatter } = this.$page
      return frontmatter.tags || ['Default']
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
