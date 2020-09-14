<template>
  <v-main class="changelog__content">
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
              <Content custom class="content" />
              <v-timeline
                dense
                clipped
                v-for="(item, key) in changelogs"
                :key="key"
              >
                <v-timeline-item
                  class="mb-4"
                  color="grey"
                  icon-color="grey lighten-2"
                  small
                >
                  <v-row justify="space-between">
                    <v-col cols="7">
                      <v-chip small color="primary" label outlined>
                        {{ item.version }}
                      </v-chip>
                      <span class="ml-2">{{ item.text }}.</span>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
              <valine class="article__comments" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      changelogs: [
        {
          version: '1.0.0',
          text: 'Create vuepress theme with vuetify'
        },
        {
          version: '1.1.0',
          text: 'Publish theme'
        }
      ]
    }
  },
  computed: {
    tags() {
      const { frontmatter } = this.$page
      return frontmatter.tags || ['Default']
    }
  },
  methods: {}
}
</script>
