/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useGlobal } from "../../../hooks/GlobalContext";
import styles from "./styles.module.css";
import Menu from "../../../components/Menu";
import Content from "../../../components/Content";
import Card from "../../../components/Card";
import CardTracks from "../../../components/CardTracks";
import ButtonSong from "../../../components/ButtonSong";
import { hoursComp } from "../../../utils/forCom";

const Home = () => {
  const user = localStorage.getItem("user");
  const {
    topArtists,
    recommendations,
    savedTracks,
    getTopMe,
    setTopArtists,
    getRecommendations,
    setRecommendations,
    getSavedTracks,
    setSavedTracks,
    getSearchItems,
  } = useGlobal();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    getTopMe({ limit: 6 })
      .then((res) => {
        setTopArtists([res.data]);
      })
      .catch((err) => {});

    getRecommendations({ limit: 4 })
      .then((res) => {
        setRecommendations([res.data.tracks]);
      })
      .catch((err) => {});

    getSavedTracks({ offset: 0, limit: 4 })
      .then((res) => {
        setSavedTracks([res.data.items]);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    getSearchItems({ search: search })
      .then((res) => {
        setResult([res.data.tracks]);
      })
      .catch((err) => {
        setResult([]);
      });
  }, [search]);

  return (
    <div>
      <div className={styles.body}>
        <Menu />
      </div>
      <div className={styles.home}>
        {user && (
          <Header
            user={user}
            search={search}
            setSearch={setSearch}
            getSearchItems={getSearchItems}
          />
        )}
        {result?.length > 0 ? (
          <div className={styles.content_search}>
            <section>
              <h1 className={styles.title}>Melhor resultado</h1>
              {result.map((item) => (
                <div className={styles.container_result}>
                  <img
                    className={styles.img_artist}
                    src={item.items[0].album.images[0].url}
                  />
                  {/* {console.log(item.items[0].images)} */}
                  <div style={{ paddingLeft: "1.5rem" }}>
                    <h1>{item.items[0].name}</h1>
                    <section
                      style={{
                        flexDirection: "row",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <span>
                        {Object.values(item.items[0].artists).map(
                          (value, key) =>
                            item.items[0].artists.length > 1
                              ? value.name + ", "
                              : value.name
                        )}
                      </span>
                      {console.log(item.items[0].preview_url)}
                      <ButtonSong
                        hrfe={item.items[0].preview_url}
                        top="0px"
                        right="15px"
                      />
                    </section>
                  </div>
                </div>
              ))}
            </section>
            <section>
              <h1 className={styles.title}>Músicas</h1>
              <div className={styles.container_result}></div>
            </section>
          </div>
        ) : (
          <div className={styles.container}>
            <>
              <h1 className={styles.title}>{hoursComp()}</h1>
              <section className={styles.layout_grid}>
                <Content data={topArtists} />
              </section>

              <h1>Recomendados para hoje</h1>
              <section className={styles.sectionItems}>
                <Card data={recommendations} />
              </section>

              <h1>Suas músicas favoritas</h1>
              <section className={styles.sectionItems}>
                <CardTracks data={savedTracks} />
              </section>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
