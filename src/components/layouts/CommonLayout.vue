<template>
  <div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8 class="pa-5">
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'CommonLayout'
}
</script>

<style scoped>
</style>
