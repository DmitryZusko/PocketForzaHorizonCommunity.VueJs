<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  author: string;
  creationDate: string;
}>();
</script>

<template>
  <v-card-title>{{ props.title }}</v-card-title>
  <v-card-text>
    <p>{{ props.description }}</p>
    <p>{{ props.author }}</p>
    <p>{{ props.creationDate }}</p>
  </v-card-text>
</template>
