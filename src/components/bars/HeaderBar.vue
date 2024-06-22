<template>
  <div>
    <v-app-bar color="#1F4591" dense dark>
      <v-app-bar-nav-icon @click="$emit('toggleLeftBar')"></v-app-bar-nav-icon>

      <v-toolbar-title>Table</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$emit('toggleFilterBar')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
