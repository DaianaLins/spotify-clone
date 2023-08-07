
import axios from "axios";
import { host, api } from "./API";

const apiSpotifyAuth = axios.create({
  baseURL: `${host}`,
});

const apiSpotifyUser = axios.create({
  baseURL: `${api}`,
});

apiSpotifyUser.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = ` Bearer ${token}`;
    } 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const refreshToken = async (refresh_token) => {
  try {
    const resp = await apiSpotifyAuth.get("/refresh_token", { params: { refresh_token: refresh_token } });
    localStorage.setItem("token", resp.data.access_token);
    return resp.data.access_token;
  } catch (e) {
    console.log("Error", e);
  }
};

export const getUser = async () => {
  try {
    const resp = await apiSpotifyUser.get("/v1/me");
    return resp
  } catch (e) {
    console.log("Error", e);
  }
};


export const SignIn = async () => {
  try{
    const res = await apiSpotifyAuth.get("/login");
      window.open(res.data.redirectUrl, "_self");
  } 
  catch(err){
    console.log(err);
  };
};

export const getCallback = async (code, state) => {
  try{
    const res = await apiSpotifyAuth.get("/callback", { params: { code: code, state: state } });
    return res.data.tokens.refresh_token;
  } catch(err) {
    console.log(err)
  }
};


apiSpotifyUser.interceptors.response.use(
  (response) => {
    console.log(response)
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log(error)
    if (error === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      // const resp = await refreshToken();
      const resp = {}

      const access_token = resp.response.accessToken;

      // addTokenToLocalStorage(access_token);
      apiSpotifyUser.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      return apiSpotifyAuth(originalRequest);
    }
    return Promise.reject(error);
  }
);