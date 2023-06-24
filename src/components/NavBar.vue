<script setup lang="ts">
import { defaultLogoSize } from "@/components/constants/defaultConstants";
</script>

<template>
  <v-toolbar color="primary">
    <RouterLink to="/">
      <v-img
        :width="defaultLogoSize.width"
        :height="defaultLogoSize.height"
        cover
        src="@/assets/logo.png"
      />
    </RouterLink>
    <v-spacer />
    <div class="button-block">
      <RouterLink to="/">
        <v-btn variant="flat" class="nav-btn" color="primary">Home</v-btn>
      </RouterLink>
      <RouterLink to="/">
        <v-btn variant="flat" class="nav-btn" color="primary">Cars</v-btn>
      </RouterLink>
      <RouterLink to="/">
        <v-btn variant="flat" class="nav-btn" color="primary">Personal Statistics</v-btn>
      </RouterLink>
      <RouterLink to="/designs">
        <v-btn variant="flat" class="nav-btn" color="primary">Designs</v-btn>
      </RouterLink>
      <v-btn icon="mdi-weather-night" class="icon-btn"></v-btn>
      <v-btn icon="mdi-logout" class="icon-btn"></v-btn>
    </div>
  </v-toolbar>
</template>

<style scoped>
.nav-btn {
  margin: auto 5px;
  border: 1px solid #eee;
}
</style>
