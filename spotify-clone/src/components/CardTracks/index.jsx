import React from 'react';

// import { Container } from './styles';
import styles from './styles.module.css'
import ButtonSong from '../ButtonSong';
import { truncate } from '../../utils/forText';

const CardTracks = ({data}) => {
  return(
    <>
      {data && (
        Object.values(data[0])?.map((item, key) => (
          <div className={styles.content} key={key} >
            <div className={styles.content_module}>
              {item.track?.preview_url && (
                <div style={{position: 'relative', zIndex: 2}}>
                  <ButtonSong hrfe={item.track.preview_url} />
                </div>
              )}
              <img
                className={styles.img}
                src={item.track?.album?.images[1].url}
                width={200}
                height={200}
                alt=""
              />
              <audio
                id="myAudio"
                style={{ display: "none" }}
                type="audio/mpeg"
                key={key}
                src={`${item.track?.preview_url}`}
              />

              <h1>{truncate(item.track?.album?.name, 19)}</h1>
              {/* {console.log(apiSpotifyUser+item.track?.album.href.slice(23, 48))} */}
              <a href={item.track?.album?.href.slice(23, 48)}>
                <span>{item.track?.album?.artists[0].name}</span>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default CardTracks;