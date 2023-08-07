import React, { Component, useEffect } from "react";
import { callbackRoute, refreshTokenRoute } from "../../services/API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/GlobalContext";

const Home = () => {
  
  const refresh_token = localStorage.getItem("refresh_token");

  const { getCallback, token,  onRefresh } = useGlobal();



  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
