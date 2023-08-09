import React, {useState} from "react";

// import { Container } from './styles';
import styles from "./styles.module.css";
import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

const ButtonSong = ({ hrfe,   key }) => {
  const [pause, setPause] = useState(false);
  const [saved, setSaved] = useState()
  var snd = '';
  const playAudio = (melody) => {
    snd = new Audio(melody);
    setSaved(snd)
    setPause(true)
    snd.play();
  }

  const pauseAudio = () => {
    setPause(false)
    saved.pause();
  }
  return (
    <div style={{position: 'absolute', zIndex: 100, right: "10px", top: "9rem", cursor: "pointer", background: "#1ed760", borderRadius: 48,width: "48px", height:"48px", alignItems: 'center', justifyContent: "center", display: 'flex' }}>
    {!pause ? <BsFillPlayFill onClick={()=> playAudio(hrfe)} color="black"  size={32} /> : <BsPauseFill color="black" size={32} onClick={()=> pauseAudio()} />}
    </div>
  );
};

export default ButtonSong;
