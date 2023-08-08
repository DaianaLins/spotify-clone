/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { useGlobal } from "../../../hooks/GlobalContext";
import styles from "./styles.module.css";
import Menu from "../../../components/Menu";
import { apiSpotifyUser } from "../../../services/interceptores";

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
  } = useGlobal();

  useEffect(() => {
    getTopMe()
      .then((res) => {
        setTopArtists([res.data]);
      })
      .catch((err) => {});

    getRecommendations()
      .then((res) => {
        setRecommendations([res.data.tracks]);
      })
      .catch((err) => {});
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  console.log(recommendations)

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
            {topArtists?.map((item, index) =>
              Object.keys(item.items).map((key) => (
                <div className={styles.content_artist}>
                  <img
                    className={styles.img_artist}
                    src={item.items[key]?.images[0].url}
                  />
                  <h3>{item.items[key].name}</h3>
                </div>
              ))
            )}
          </section>

          <h1>Recomendados para hoje</h1>

          <section className={styles.sectionItems}>
            {recommendations?.map((item) =>
              Object.keys(item).map((key) => (
                <div className={styles.content} key={key}>
                  <div className={styles.content_module}>
                  <img className={styles.img} src={item[key].album.images[1].url} width={200} height={200} />
                    <h1>{truncate(item[key].album.name, 19)}</h1>
                    {/* {console.log(apiSpotifyUser+item[key].album.href.slice(23, 48))} */}
                    <a href={item[key].album.href.slice(23, 48)}>
                      <span>{item[key].album.artists[0].name}</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
