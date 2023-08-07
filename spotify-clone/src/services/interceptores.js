
import axios from "axios";
import { host } from "./API";

const customFetch = axios.create({
  baseURL: `${host}`,
});


customFetch.interceptors.request.use(
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
    const resp = await customFetch.get("/refresh_token", { params: { refresh_token: refresh_token } });
    localStorage.setItem("token", resp.data.access_token);
    return resp.data.access_token;
  } catch (e) {
    console.log("Error", e);
  }
};

export const SignIn = async () => {
  try{
    const res = await customFetch.get("/login");
      window.open(res.data.redirectUrl, "_self");
  } 
  catch(err){
    console.log(err);
  };
};

export const getCallback = async (code, state) => {
  try{
    const res = await customFetch.get("/callback", { params: { code: code, state: state } });
    return res.data.tokens.refresh_token;
  } catch(err) {
    console.log(err)
  }
};


customFetch.interceptors.response.use(
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
      customFetch.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      return customFetch(originalRequest);
    }
    return Promise.reject(error);
  }
);