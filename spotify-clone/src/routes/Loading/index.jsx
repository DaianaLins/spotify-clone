import React, {useEffect} from 'react';

import { useNavigate } from "react-router-dom";
import { getCallback, refreshToken, getUser } from '../../services/interceptores';


const Loading = () => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const navigate = useNavigate();
 
  useEffect(() => {
    getCallback(code, state).then((res)=>{
      refreshToken(res).then((res)=>{
        getUser().then((res)=>{
          navigate('/home')

        }).catch((err)=>{
          console.log(err)
        })

      })
    }).catch((err)=>{
      console.log(err)
    })  
    
  }, [code, state]);

  useEffect(()=>{
    if(!code) navigate('/login')
  }, [])

  return <div />;
}

export default Loading;