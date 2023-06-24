import { defineStore } from "pinia";

export const useDesignStore = defineStore("designStore", {
  state: () => ({
    isLoading: false,
    designs: [],
  }),
});
