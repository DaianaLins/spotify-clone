/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

// import { Container } from './styles';

import styles from "./styles.module.css";

import { truncate } from "../../utils/forText";
import ButtonSong from "../ButtonSong";

const Card = ({ data, icons }) => {
 
  return (
    <>
      {data?.map((item) =>
        Object.keys(item).map((key) => (
          <div className={styles.content} key={key}>
            <div className={styles.content_module}>
              {item[key].preview_url && (
                <div className={styles.button}>
                  <ButtonSong hrfe={item[key].preview_url} key={key} />
                </div>
              )}
              <img
                className={styles.img}
                src={item[key].album?.images[1].url}
                width={200}
                height={200}
                alt=""
              />
              <audio
                id="myAudio"
                style={{ display: "none" }}
                type="audio/mpeg"
                key={key}
                src={`${item[key].preview_url}`}
              />

              <h1>{truncate(item[key].album?.name, 19)}</h1>
              {/* {console.log(apiSpotifyUser+item[key].album.href.slice(23, 48))} */}
              <a href={item[key].album?.href.slice(23, 48)}>
                <span>{item[key].album.artists[0].name}</span>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
