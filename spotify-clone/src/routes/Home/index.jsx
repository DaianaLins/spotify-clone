import React from "react";
import { useGlobal } from "../../hooks/GlobalContext";
import Header from "../../components/Header";

const Home = () => {
  const {user} = useGlobal();
  
  return (
    <div>
      {user && <Header user={user} />}
    </div>
  );
};

export default Home;
