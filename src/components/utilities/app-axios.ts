import axios from "axios";
import envHandler from "./env-handler";

const getInstance = () => {
  console.log(envHandler.getBaseUrl());

  return axios.create({
    baseURL: envHandler.getBaseUrl(),
  });
};

const appAxios = { getInstance };

export default appAxios;
