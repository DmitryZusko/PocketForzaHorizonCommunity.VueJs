import { IDesignGetRequest } from "../dto/requests/DesignGetRequest";
import { IDesignsResponse } from "../dto/responses/DesignsResponse";
import appAxios from "../utilities/app-axios";

const loadDesigns = async (params: IDesignGetRequest) => {
  const axios = appAxios.getInstance();

  return axios.get<IDesignsResponse>("design", { params: { params } });
};

const designService = { loadDesigns };

export default designService;
