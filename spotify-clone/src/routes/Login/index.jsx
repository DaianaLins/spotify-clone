import React, {  useState } from 'react';
import { loginRoute } from '../../services/API';
import axios from 'axios';
import styles from './styles.module.css';
import { SignIn } from '../../services/interceptores';



const Login = () => {

    return (
        <div className={styles.container} >
            <img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png" className={styles.img} alt="" width={250} />
            <section >
                <button onClick={SignIn} className={styles.button} >Entrar</button>
            </section>
        </div>
    );
}

export default Login;