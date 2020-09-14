<template>
  <v-footer app color="black lighten-4">
    <v-container>
      <v-row no-gutter>
        <v-col cols="12">
          <div class="white--text text-center ">
            <v-icon dark>mdi-github</v-icon>
            <v-icon dark>mdi-twitter</v-icon>
            <v-spacer></v-spacer>
            <p class="mt-2">
              Power by vuepress and vuepress-theme-neptune &copy;
              {{ new Date().getFullYear() }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>
