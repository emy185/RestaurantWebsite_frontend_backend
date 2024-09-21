import React from "react";
import home from "../../imgs/home.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative font-poppins">
      <img src={home} alt="home" />
      <div className="absolute md:top-[30%] xl:left-[36rem] lg:left-[26rem] md:left-[17rem] sm:left-[13rem] sm:top-[15%]">
        <h1 className="lg:text-7xl font-playfair pb-6 sm:text-5xl">
          Best food for <br />
          your Taste
        </h1>
        <span>
          Discover detectable cuisine and unforgettable moment
          <br />
          in our welcoming, culinary haven.
        </span>
        <div className="mt-10">
          <Link
            className="border-2 rounded-full p-3 mr-5 border-black font-semibold hover:bg-[#AD343E] hover:duration-700 hover:border-[#AD343E] hover:text-white"
            to="/booking"
          >
            Book A Table
          </Link>
          <Link
            className="border-2 rounded-full p-3 border-black font-semibold hover:bg-[#AD343E] hover:duration-700 hover:border-[#AD343E] hover:text-white"
            to="/menu"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
