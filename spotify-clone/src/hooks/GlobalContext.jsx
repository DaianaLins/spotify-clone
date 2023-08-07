import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";
import { refreshTokenRoute, loginRoute, callbackRoute } from "../services/API";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const SignIn = async () => {
    await axios
      .get(loginRoute)
      .then((res) => {
        window.open(res.data.redirectUrl, "_self");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCallback = async (code, state) => {
    await axios
      .get(callbackRoute, { params: { code: code, state: state } })
      .then((res) => {
        localStorage.setItem("refresh_token", res.data.tokens.refresh_token);
        return true;
      })
      .catch((err) => {
        return false;
      });
  };

  const onRefresh = async (refresh_token) => {
    await axios
      .get(refreshTokenRoute, { params: { refresh_token: refresh_token } })
      .then((res) => {
          localStorage.removeItem("refresh_token");
          return localStorage.setItem("token", res.data.access_token);
        })
        .catch((err) => {
            console.log(err);
        });
  };
 
  const contextValue = {
    onRefresh,
    SignIn,
    getCallback,
    token,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }

  return context;
}

export { GlobalProvider, useGlobal };
