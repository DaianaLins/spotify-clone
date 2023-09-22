import React, { createContext, useContext, useState, useEffect } from "react";
import { apiSpotifyUser } from "../services/interceptores";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [topArtists, setTopArtists] = useState()
  const [recommendations, setRecommendations] = useState()
  const [savedTracks, setSavedTracks] = useState()
  const [search, setSearch] = useState("");

  const getAlbum = async () =>{
    const res = await apiSpotifyUser.get('/v1/me/albums')
    return res
  } 

  const getTopMe = async ({limit}) =>{
    const res = await apiSpotifyUser.get(`/v1/me/top/artists?limit=${limit}`)
    return res
  } 

  const getRecommendations = async ({limit}) =>{
    const res =await apiSpotifyUser.get(`/v1/recommendations?limit=${limit}&market=BR&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Cpop%2C+mpb&seed_tracks=0c6xIDDpzE81m2q797ordA&max_popularity=85`)
    return res
  }

  const getSavedTracks = async ({offset, limit}) =>{
    const res = await apiSpotifyUser.get(`/v1/me/tracks?market=BR&offset=${offset}&limit=${limit}`)
    return res
  } 

  const getSearchItems = async ({search}) =>{
    const res = await apiSpotifyUser.get(`/v1/search?q=${search}&type=album%2Ctrack%2Cplaylist&locale=pt-BR%2Cpt%3Bq%3D0.9&offset=0&limit=4&include_external=audio`)

    return res
  } 



  const contextValue = {
    user,
    token,
    getAlbum,
    getTopMe,
    topArtists,
    setTopArtists,
    getRecommendations,
    recommendations,
    setRecommendations,
    getSavedTracks,
    savedTracks,
    setSavedTracks,
    getSearchItems
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
