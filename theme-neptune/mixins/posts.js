export default {
  computed: {
    $categories() {
      return this.$site.pages.filter(page => {
        const { frontmatter } = page
        return frontmatter.layout === 'Category'
      })
    },
  },
}
