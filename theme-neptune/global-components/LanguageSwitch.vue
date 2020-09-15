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
        :to="computeRoute(language, path)"
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
const replaceChar = (origString, replaceChar, index) => {
  let firstPart = origString.substr(0, index)
  let lastPart = origString.substr(index + 1)
  let newString = firstPart + replaceChar + lastPart
  return newString
}
export default {
  name: 'LangugeSwitch',
  props: {
    locales: Object
  },
  data() {
    return {}
  },
  computed: {
    currentLanguage() {
      return this.locales[this.$localePath]
    }
  },
  methods: {
    handleChanggeLocale(lang, $localePath) {
      this.$vuetify.lang.current = lang.lang
    },
    computeRoute(lang, $localePath) {
      const localePath = this.$localePath
      let path
      if (localePath === '/') {
        path = replaceChar(this.$page.path, '', 0)
      } else {
        const temp = this.$page.path.split(localePath)
        path = temp[1]
      }
      return $localePath + path
    }
  }
}
</script>
