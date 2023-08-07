import React, {
  createContext,
  useContext,
} from "react";
import axios from "axios";
import { refreshTokenRoute, loginRoute, callbackRoute } from "../services/API";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user")
  
  const contextValue = {
    user,
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
