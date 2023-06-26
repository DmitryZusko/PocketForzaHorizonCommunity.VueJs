import { ISignInRequest } from "../dto/requests/SignInRequest";
import { ISignUpRequest } from "../dto/requests/SignUpRequest";
import { IAuthResponse } from "../dto/responses/AuthResponse";
import appAxios from "../utilities/app-axios";

const signInAsync = async (request: ISignInRequest) => {
  const axios = appAxios.getInstance();

  return axios.post<IAuthResponse>("authentication/sign-in", request);
};

const signUpAsync = async (request: ISignUpRequest) => {
  const axios = appAxios.getInstance();

  return axios.post<IAuthResponse>("authentication/sign-up", request);
};

const authService = { signInAsync, signUpAsync };

export default authService;
