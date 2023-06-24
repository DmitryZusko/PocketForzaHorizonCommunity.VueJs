<script setup lang="ts">
import NavigationCard from "@/components/NavigationCard.vue";
import { useDesignStore } from "@/store/designStore";
import { ref, watchEffect } from "vue";
import { defaultTextPreviewLimit } from "@/components/constants/defaultConstants";

const designStore = useDesignStore();

const designState = designStore.getDesignsState;

const searchQuery = ref("");

watchEffect(async () => {
  designStore.loadDesigns({
    page: designState.page,
    pageSize: designState.pageSize,
    searchQuery: searchQuery.value,
    descriptionLimit: defaultTextPreviewLimit,
  });
});
</script>

<template>
  <SearchComponent />
  <CarSelectorComponent />
  <NavigationCard />
  <p v-for="design in designState.entities" :key="design.title">{{ design.id }}</p>
</template>
