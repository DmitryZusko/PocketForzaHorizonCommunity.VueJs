<script setup lang="ts">
import NavigationCard from "@/components/NavigationCard.vue";
import { useDesignStore } from "@/store/designStore";
import { ref, onMounted, onUnmounted } from "vue";
import { defaultTextPreviewLimit } from "@/components/constants/defaultConstants";
import DesignCardBody from "./DesignCardBody.vue";
import { VInfiniteScroll } from "vuetify/lib/labs/components.mjs";

const designStore = useDesignStore();

const designState = designStore.getDesignsState;

const searchQuery = ref("");

const loadDesigns = async () => {
  await designStore.loadDesigns({
    page: designState.page,
    pageSize: designState.pageSize,
    searchQuery: searchQuery.value || null,
    descriptionLimit: defaultTextPreviewLimit,
  });

  designStore.setPage(++designState.page);
};

const handleInfinitLoad = async ({
  done,
}: {
  done: (status: "error" | "loading" | "empty" | "ok") => void;
}) => {
  if (designState.total < designState.pageSize * designState.page) return done("empty");

  loadDesigns();

  done("ok");
};

onMounted(async () => {
  loadDesigns();
});

onUnmounted(() => {
  designStore.$reset();
});
</script>

<template>
  <SearchComponent />
  <CarSelectorComponent />
  <v-infinite-scroll :items="designState.entities" @load="handleInfinitLoad">
    <v-container>
      <v-row>
        <v-col
          v-for="design in designState.entities"
          :key="design.id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
        >
          <NavigationCard :image-src="design.thumbnailUrl">
            <template v-slot:card-body>
              <DesignCardBody
                :title="design.title"
                :description="design.description || ''"
                :author="design.authorUsername"
                :creation-date="design.creationDate"
              />
            </template>
          </NavigationCard>
        </v-col>
      </v-row>
    </v-container>
  </v-infinite-scroll>
</template>
