import React, { createContext, useContext, useState } from "react";
import { apiSpotifyUser } from "../services/interceptores";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [topArtists, setTopArtists] = useState()

  const getAlbum = async () =>{
    const id = '4aawyAB9vmqN3uQ7FjRGTy'
    const res = await apiSpotifyUser.get('/v1/me/albums')
    return res
  } 

  const getTopMe = async () =>{
    const res = await apiSpotifyUser.get('/v1/me/top/artists?limit=6')
    return res
  } 


  const contextValue = {
    user,
    token,
    getAlbum,
    getTopMe,
    topArtists,
    setTopArtists
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
