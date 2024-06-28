import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Work from "./Work";
import Service from "./Service";
import Contactus from "./Contactus";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Service />
      <Contactus /> 
    </div>
  );
};

export default Home;
