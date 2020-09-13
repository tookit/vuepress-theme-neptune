<template>
  <v-menu bottom left offset-y>
    <template #activator="{ on: menu }">
      <v-btn text style="min-width: 48px" v-on="menu">
        <v-img :src="currentLanguage.flag" width="26px" />
      </v-btn>
    </template>
    <v-list dense light>
      <v-list-item
        v-for="(language, path) in locales"
        :key="language.lang"
        avatar
        @click="handleChanggeLocale(language, path)"
      >
        <v-list-item-avatar tile size="24px" class="mr-2">
          <v-img :src="language.flag" width="24px" />
        </v-list-item-avatar>
        <v-list-item-title v-text="language.name" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    locales: Object,
  },
  data() {
    return {}
  },
  computed: {
    currentLanguage() {
      return this.locales[this.$localePath]
    },
  },
  methods: {
    handleChanggeLocale(lang, path) {
      this.$vuetify.lang.current = lang.lang
      this.$router.push({ path: path })
    },
  },
}
</script>
