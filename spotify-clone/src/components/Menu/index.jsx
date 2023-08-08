import React from 'react';
import styles from './styles.module.css'
// import { Container } from './styles';
import {BiHomeAlt, BiSearchAlt} from 'react-icons/bi'
import {ImBooks} from 'react-icons/im'

const Menu = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.button}>
            <BiHomeAlt color="#fff"
            style={{marginRight: 12}}
              size={24}/>
              <p className={styles.span}>Início</p>
            </div>
            <div className={styles.button}>
            <BiSearchAlt color="#fff"
            style={{marginRight: 12}}
              size={24}/>
              <p className={styles.span}>Buscar</p>
            </div>
        </div>
        <div className={styles.content}>
        <div className={styles.biblio}>
          <ImBooks
           color="#fff"
           style={{marginRight: 12}}
             size={24}
          />
              <p className={styles.span}>Sua Biblioteca</p>
            </div>  
        </div>
    </div>
  );
}

export default Menu;