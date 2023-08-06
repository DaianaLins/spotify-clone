import React, {  useState } from 'react';
import { loginRoute } from '../../service/API';
import axios from 'axios';
import styles from './styles.module.css';



const Login = () => {
    const SignIn = async () => {
        await axios.get(loginRoute).then((res) => {
            window.open(res.data.redirectUrl , '_self')
        }).catch((err) => {

            console.log(err)
        })
    }



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