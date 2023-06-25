import axios from "axios";
import envHandler from "./env-handler";

const getInstance = () => {
  return axios.create({
    baseURL: envHandler.getBaseUrl(),
  });
};

const appAxios = { getInstance };

export default appAxios;
