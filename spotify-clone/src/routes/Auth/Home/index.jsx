/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useGlobal } from "../../../hooks/GlobalContext";
import styles from "./styles.module.css";
import Menu from "../../../components/Menu";
import { apiSpotifyUser } from "../../../services/interceptores";
import Content from "../../../components/Content";
import Card from "../../../components/Card";
import CardTracks from "../../../components/CardTracks";

const Home = () => {
  const user = localStorage.getItem("user");
  const {
    getAlbum,
    getTopMe,
    setTopArtists,
    topArtists,
    getRecommendations,
    recommendations,
    setRecommendations,
    savedTracks,
  } = useGlobal();

  const [tracks, setTracks] = useState()
  
  useEffect(()=>{
    savedTracks?.map((item)=>{
      Object.keys(item).map((key)=>{
  
        setTracks([item[key].track]);
      })
      
    })

  }, [savedTracks])

  return (
    <div>
      <div className={styles.body}>
        <Menu />
      </div>
      <div className={styles.home}>
        {user && <Header user={user} />}
        <div className={styles.container}>
          <h1>Boa noite</h1>
          <section className={styles.layout_grid}>
            <Content data={topArtists} />
          </section>

          <h1>Recomendados para hoje</h1>
          <section className={styles.sectionItems}>
            <Card data={recommendations} />
          </section>

          <h1>Suas músicas favoritas</h1>
          <section className={styles.sectionItems}>
        
            <CardTracks data={tracks} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
