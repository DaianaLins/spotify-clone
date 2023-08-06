import React, { Component, useEffect } from 'react';
import { callbackRoute } from '../../service/API';
import axios from 'axios';

const Home = ()  => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const data = url.searchParams.get("?");

  const getCallback = async  () =>{
    console.log('entrou')
    await axios.get(callbackRoute, {code: data}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{

    getCallback();
  }, [data])
   
 


  return (
    <div >
      <h1>Home</h1>
    </div>
  );
}

export default Home;