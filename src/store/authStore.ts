import { ISignInRequest } from "@/components/dto/requests/SignInRequest";
import authService from "@/components/services/auth-service";
import { defineStore } from "pinia";
import { IAuthStoreState } from "./types";
import { useStorage } from "@vueuse/core";
import { ISignUpRequest } from "@/components/dto/requests/SignUpRequest";

export const useAuthStore = defineStore("authStore", {
  state: (): IAuthStoreState => ({
    isAuthenticated: useStorage("isAuthenticated", false),
    accessToken: useStorage("accessToken", ""),
    refreshToken: useStorage("refreshToken", ""),
  }),
  getters: {
    getAuthState: (state) => state,
  },
  actions: {
    logOut() {
      this.isAuthenticated = false;
      this.accessToken = "";
      this.refreshToken = "";
    },
    async signInAsync(request: ISignInRequest) {
      try {
        const response = await authService.signInAsync(request);
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;
        this.isAuthenticated = true;
      } catch (error) {
        alert(error);
      }
    },
    async signUpAsync(request: ISignUpRequest) {
      try {
        const response = await authService.signUpAsync(request);
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;
        this.isAuthenticated = true;
      } catch (error) {
        alert(error);
      }
    },
  },
});
