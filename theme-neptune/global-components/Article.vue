<template>
  <v-app class="article">
    <Header @toogle:sidebar="handleToggleSideBar" />
    <Sidebar :show-drawer="showDrawer" />
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
        </v-row>
      </v-container>
    </v-main>
    <v-navigation-drawer
      right
      fixed
      clipped
      width="200px"
      style="margin-top:64px"
      v-model="showToc"
    >
      <v-toolbar flat>
        <!-- <v-btn icon small @click.stop="showToc = !showToc">
          <v-icon>mdi-menu</v-icon>
        </v-btn> -->
        <v-toolbar-title>
          Content
        </v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <Toc />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      showDrawer: true,
      showToc: true,
    }
  },
  computed: {
    tocClass() {
      return {
        toc: this.showToc,
      }
    },
  },
  methods: {
    handleToggleSideBar() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>
