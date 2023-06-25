<script lang="ts" setup>
const props = defineProps<{
  imageSrc: string;
}>();
</script>

<template>
  <v-card>
    <router-link to="/">
      <v-img :src="props.imageSrc" />
      <slot name="card-body"></slot>
    </router-link>
  </v-card>
</template>
