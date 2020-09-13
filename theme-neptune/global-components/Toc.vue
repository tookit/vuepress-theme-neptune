<template>
  <div class="mb-4" v-on="$listeners">
    <slot name="top" />
    <ul class="app-table-of-contents">
      <li v-for="(item, i) in list" :key="i">
        <a
          :href="item.id"
          :class="{
            'primary--text': activeIndex === i,
            'grey--text text--darken-1': activeIndex !== i,
          }"
          :style="{
            borderColor: activeIndex === i ? 'inherit' : null,
          }"
          class="mb-3 d-block"
          @click.stop.prevent="handleGoto(item.target)"
          v-text="computeText(item.text)"
        />
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
export default {
  data: () => ({
    activeIndex: 0,
    currentOffset: 0,
    list: [],
    timeout: null,
  }),
  watch: {
    '$route.path': {
      immediate: true,
      handler() {
        setTimeout(this.genList, 50)
      },
    },
  },
  methods: {
    async genList() {
      const list = []
      const items = document.querySelectorAll('h2')
      for (const item of items) {
        if (
          // Not a top level heading
          !['H2'].includes(item.tagName) ||
          // From previous list
          this.list.find(l => l.item === item)
        )
          continue
        list.push({
          item,
          text: item.innerText,
          target: `#${item.id}`,
        })
      }
      this.list = list
    },
    findActiveIndex() {
      if (this.currentOffset < 100) {
        this.activeIndex = 0
        return
      }
      const list = this.list.slice().reverse()
      const index = list.findIndex(item => {
        const { offsetParent } = item.item
        if (!offsetParent) return false
        return offsetParent.offsetTop - 100 < this.currentOffset
      })
      const lastIndex = list.length
      this.activeIndex = index > -1 ? lastIndex - 1 - index : lastIndex
    },
    handleGoto(id) {
      this.$vuetify.goTo(id).then(() => {
        if (!id) {
          return (document.location.hash = '')
        }

        if (history.replaceState) {
          history.replaceState(null, null, id)
        } else {
          document.location.hash = id
        }
      })
    },
    computeText(text) {
      return text.replace('# ', ' ')
    },
  },
}
</script>

<style lang="sass">
.app-table-of-contents
  list-style-type: none !important
  margin: 0
  padding: 16px 0 0
  text-align: left
  width: 100%
  li
    a
      font-size: 0.85em !important
      border-left: 2px solid transparent
      padding-left: 16px
      text-decoration: none
      transition: color .1s ease-in
</style>
