import React from 'react';
import styles from './styles.module.css'
import { MdClear, MdOutlineOpenInNew } from "react-icons/md";

const ModalHeader = ({logout}) => {
  return (
    <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.button} onClick={()=> window.open("https://www.spotify.com/br-pt/account/overview/")}>
              <p className={styles.span}>Conta</p>
              <MdOutlineOpenInNew color="#fff"
              size={24}
              className={styles.iconNew} />
            </div>
            <div className={styles.button}>
              <p className={styles.span}>Perfil</p>
            </div>
            <hr /> 
            <div className={styles.button} onClick={() => logout()}>
              <p className={styles.span}>Sair</p>
            </div>
          </div>
        </div>
  );
}

export default ModalHeader;