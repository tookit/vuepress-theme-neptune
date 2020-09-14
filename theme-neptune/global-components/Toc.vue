<template>
  <div class="toc" v-on="$listeners">
    <v-subheader>Content</v-subheader>
    <v-divider />
    <slot name="top" />
    <v-list class="toc_list">
      <v-list-item
        class="toc_list__item"
        v-for="item in $page.headers"
        :key="item.slug"
        :to="computeHash(item.slug)"
      >
        <span class="toc_list__item__title">
          {{ item.title }}
        </span>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  methods: {
    findActiveIndex() {},
    computeHash(slug) {
      return {
        path: this.$route.path,
        hash: slug
      }
    }
  }
}
</script>
