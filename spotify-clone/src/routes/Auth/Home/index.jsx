/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { useGlobal } from "../../../hooks/GlobalContext";
import styles from "./styles.module.css";
import Menu from "../../../components/Menu";

const Home = () => {
  const user = localStorage.getItem("user");
  const { getAlbum, getTopMe, setTopArtists, topArtists } = useGlobal();

  useEffect(() => {
    getTopMe()
      .then((res) => {
        setTopArtists([res.data]);
      })
      .catch((err) => {});
  }, []);

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
            {topArtists?.map((item, index) => (
              Object.keys(item.items).map((key) => (
                  <div className={styles.content_artist}>
                    <img
                      className={styles.img_artist}
                      src={item.items[key]?.images[0].url}
                    />
                    <h3>{item.items[key].name}</h3>
                  </div>
                ))
            ))}
          </section>

          <h1>Meus artistas favoritos</h1>

          <div className={styles.content}>
            <div className={styles.img}></div>
            <h1>Nome</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
