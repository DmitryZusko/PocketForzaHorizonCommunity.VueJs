import { IDesignGetRequest } from "../dto/requests/DesignGetRequest";
import { IDesignsResponse } from "../dto/responses/DesignsResponse";
import appAxios from "../utilities/app-axios";

const loadDesigns = async (params: IDesignGetRequest) => {
  const axios = appAxios.getInstance();

  return axios.get<IDesignsResponse>("design", {
    params: {
      DescriptionLimit: params.descriptionLimit,
      Page: params.page,
      PageSize: params.pageSize,
      SearchQuery: params.searchQuery,
    },
  });
};

const designService = { loadDesigns };

export default designService;
