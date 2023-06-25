<script setup lang="ts">
import { defaultLogoSize } from "./constants/defaultConstants";

interface IFormBaseComponentProps {
  formTitle: string;
}

const props = defineProps<IFormBaseComponentProps>();
</script>

<template>
  <div class="form-container">
    <v-img
      src="@/assets/logo.png"
      alt="logo"
      :width="defaultLogoSize.width"
      :height="defaultLogoSize.height"
    />
    <h1>{{ props.formTitle }}</h1>
    <slot name="form-body"></slot>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  min-width: 20vw;
  min-height: 40vh;
  padding: 25px;
}
</style>
