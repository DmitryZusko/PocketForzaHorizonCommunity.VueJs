import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import envHandler from "./env-handler";

const getInstance = () => {
  const authStore = useAuthStore();
  return axios.create({
    baseURL: envHandler.getBaseUrl(),
    headers: {
      Authorization: `Bearer ${authStore.getAuthState.accessToken}`,
    },
  });
};

const appAxios = { getInstance };

export default appAxios;
