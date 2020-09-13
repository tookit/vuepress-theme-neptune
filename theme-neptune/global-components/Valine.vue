<template>
  <div id="vcomments"></div>
</template>
<script>
export default {
  created() {},
  mounted() {
    const Valine = require('valine')
    const { valine } = this.$themeConfig
    new Valine({
      el: '#vcomments',
      appId: valine.appId,
      appKey: valine.appKey,
    })
  },
}
</script>
