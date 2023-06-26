import { defaultPageSize } from "@/components/constants/defaultConstants";
import { IDesignGetRequest } from "@/components/dto/requests/DesignGetRequest";
import designService from "@/components/services/design-service";
import { defineStore } from "pinia";
import { IDesignStoreState } from "./types";

export const useDesignStore = defineStore("designStore", {
  state: (): IDesignStoreState => ({
    isLoading: false,
    entities: [],
    total: 0,
    page: 0,
    pageSize: defaultPageSize,
  }),
  getters: {
    getDesignsState: (state) => state,
  },
  actions: {
    setPage(newValue: number) {
      this.page = newValue;
    },
    async loadDesignsAsync(params: IDesignGetRequest) {
      try {
        this.isLoading = true;
        const result = await designService.loadDesignsAsync(params);
        this.entities = [...this.entities, ...result.data.entities];
        this.total = result.data.total;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
