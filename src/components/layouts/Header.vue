<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">Artprezent</router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-icon>inbox</v-icon>
      </v-btn>

      <v-btn flat>
        <v-icon>help</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
</style>
