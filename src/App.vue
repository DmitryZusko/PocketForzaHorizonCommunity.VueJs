<template>
  <v-app>
    <v-app-bar>
      <NavBar />
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
</script>
