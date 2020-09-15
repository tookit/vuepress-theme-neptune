<template>
  <v-navigation-drawer class="app--drawer" app clipped v-model="showDrawer">
    <v-list>
      <v-subheader>Category</v-subheader>
      <v-list-item v-for="cat in categories" :key="cat.key" :to="cat.path">
        <v-list-item-content>
          <v-list-item-title>{{ cat.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showDrawer: true
    }
  },
  computed: {
    categories() {
      const lang = this.$lang
      return this.$categories.filter((item) => item.frontmatter.lang == lang)
    }
  },
  methods: {
    toogleSidebar() {
      this.showDrawer != this.showDrawer
    }
  },
  created() {}
}
</script>
