import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Delivery from "./Delivery";
import Reviews from "../../components/Reviews";

const Home = () => {
    return (
      <div>
      <Hero/>
      <Services/>
      <Delivery/>
      <Reviews/>
      </div>
    );
  };
  
  export default Home;
  