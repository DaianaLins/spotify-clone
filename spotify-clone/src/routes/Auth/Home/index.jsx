import React from "react";
import Header from "../../../components/Header";

const Home = () => {
  const user = localStorage.getItem("user");
  
  return (
    <div>
      {user && <Header user={user} />}
    </div>
  );
};

export default Home;
