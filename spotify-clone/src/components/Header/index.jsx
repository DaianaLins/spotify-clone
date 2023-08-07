import React, { useState } from 'react'
import styles from './styles.module.css'
import { FiSearch } from 'react-icons/fi';

const Header = ({user}) => {
    const [data, setData] = useState(JSON.parse(user));

   
  return (
    <div className={styles.container}>
      
      <input className={styles.input} placeholder={`O que você quer ouvir?`} type="text" />
      <img className={styles.img} src={data?.images[0]?.url} width={data?.width} height={data?.height} alt="" />
    
    </div>
  )
}

export default Header