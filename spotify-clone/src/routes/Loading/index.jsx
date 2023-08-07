import React, {useEffect} from 'react';
import { callbackRoute, refreshTokenRoute } from "../../services/API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobal } from '../../hooks/GlobalContext';
import { getCallback, refreshToken } from '../../services/interceptores';
// import { Container } from './styles';

const Loading = () => {
    const url_string = window.location.href;
  const url = new URL(url_string);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const navigate = useNavigate();
  
  const refresh_token = localStorage.getItem("refresh_token");
  localStorage.setItem("code", code);
  localStorage.setItem("state", state);


  useEffect(() => {
    getCallback(code, state).then((res)=>{
      refreshToken(res).then((res)=>{
        navigate('/home')
      })
    }).catch((err)=>{
      console.log(err)
    })  
    
  }, [code, state]);

  return <div />;
}

export default Loading;