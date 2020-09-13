<template>
  <div class="container notfound-page">
    <div class="content">
      <h1>Not Found</h1>
      <p>{{ getMsg() }}</p>
      <router-link class="backto" to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  "There's nothing here.",
  'How did we get here?',
  "That's a Four-Oh-Four.",
  "Looks like we've got some broken links.",
  'Please try your request again or contact support.',
  "The page you are looking for doesn't exist or misterionsly dissapear.",
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>

