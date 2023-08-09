import React from 'react';
import styles from './styles.module.css'

const Content = ({data}) => {

  return (
    <>
         {data?.map((item, index) =>
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
    </>
  );
}

export default Content;