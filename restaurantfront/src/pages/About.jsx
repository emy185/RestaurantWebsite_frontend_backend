import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoPlay } from "react-icons/io5";
import home from "../imgs/About-home.png";
import video from "../imgs/About-video.jpeg";
import about1 from "../imgs/about1.png";
import about2 from "../imgs/about2.png";
import about3 from "../imgs/about3.png";
import about4 from "../imgs/about4.png";
import CountUp from "react-countup";
import Reviews from "../components/Reviews";

const About = () => {
  return (
    <div className="font-poppins">
      <div className="flex justify-center px-32 xl:gap-0 lg:gap-20 flex-wrap py-20">
        <div className="relative">
          <img src={home} alt="food" className="xl:w-[80%] sm:w-[70%]" />
          <div className="text-start bg-[#474747] text-white xl:p-12 sm:p-8 w-fit rounded-xl absolute xl:top-[53%] xl:left-[32%] sm:top-[50%] sm:left-[22%]">
            <h3 className="pb-6 font-bold">Come and visit us</h3>
            <ul className="text-[12px]">
              <li className="flex gap-2 items-center pb-3 hover:text-[#DBDFD0]">
                <FiPhone /> (414) 857 - 07107
              </li>
              <li className="flex gap-2 items-center pb-3 hover:text-[#DBDFD0]">
                <LuMail /> happytummy@restaurant.com
              </li>
              <li className="flex gap-2 items-baseline pb-3 hover:text-[#DBDFD0]">
                <HiOutlineLocationMarker /> 837 W. Marshall Lane Marshalltown,
                <br />
                IA 50158, Los Angeles
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start xl:pt-20 sm:pt-20 md:pt-10 lg:pt-0">
          <h1 className="text-5xl font-playfair pb-8">
            We provide healthy
            <br />
            food for your family.
          </h1>
          <p className="font-semibold xl:pb-8 xl:text-[16px] sm:text-[14px]">
            Our story began with a vision to create a unique dining
            <br />
            experience that merges fine dining, exceptional service, and a<br />
            vibrant ambiance. Rooted in city's rich culinary culture, we aim to
            <br />
            honor our local roots while infusing a global palate.
          </p>
          <span className="xl:text-[14px] sm:text-[12px]">
            At place, we believe that dining is not just about food, but also
            about the
            <br />
            overall experience, Our staff, renowned for their warmth and
            dedication,
            <br />
            strives to make every visit an unforgettable event.
          </span>
        </div>
      </div>

      <div className="pt-20">
        <div className="relative">
          <img
            src={video}
            alt="video"
            className="w-full brightness-[0.25] contrast-75"
          />
          <div className="absolute xl:top-[33%] xl:left-[33%] text-center sm:top-[30%] md:left-[30%] sm:left-[25%]">
            <div className="flex flex-col items-center">
              <IoPlay className="size-16 bg-white p-6 rounded-full text-[#AD343E] mb-8 cursor-pointer hover:bg-[#DBDFD0]" />
              <h1 className="lg:text-5xl sm:text-4xl font-playfair text-white">
                Feel the authentic &<br />
                original taste from us
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:gap-36 sm:gap-20 py-14">
          <div className="flex items-start gap-5">
            <img src={about1} alt="about1" className="" />
            <div className="text-start">
              <h4 className="font-semibold pb-2">Multi Cuisine</h4>
              <span className="text-[12px]">
                In the new era of technology we look in
                <br />
                the future with certainty life.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={about2} alt="about2" />
            <div className="text-start">
              <h4 className="font-semibold pb-2">Easy To Order</h4>
              <span className="text-[12px]">
                In the new era of technology we look in
                <br />
                the future with certainty life.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={about3} alt="about3" />
            <div className="text-start">
              <h4 className="font-semibold pb-2">Fast Delivery</h4>
              <span className="text-[12px]">
                In the new era of technology we look in
                <br />
                the future with certainty life.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-32 bg-stone-50 lg:gap-24 sm:gap-5">
        <div>
          <h1 className="text-5xl font-playfair pb-6 text-start">
            A little information
            <br />
            for our valuable guest
          </h1>
          <p className="text-[14px] pb-10 text-start">
            At place, we believe that dining is not just about food, but also
            about the
            <br />
            overall experience, Our staff, renowned for their warmth and
            dedication,
            <br />
            strives to make every visit an unforgettable event.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="lg:p-10 sm:p-6 border-stone-300 border rounded-xl bg-white">
              <h1 className="text-5xl font-playfair pb-3">
                <CountUp start={0} end={3} duration={3} />
              </h1>
              <h4>Locations</h4>
            </div>
            <div className="lg:p-10 sm:p-6 border-stone-300 border rounded-xl bg-white">
              <h1 className="text-5xl font-playfair pb-3">
                <CountUp start={0} end={1995} duration={5} />
              </h1>
              <h4>Founded</h4>
            </div>
            <div className="lg:p-10 sm:p-6 border-stone-300 border rounded-xl bg-white">
              <h1 className="text-5xl font-playfair pb-3">
                <CountUp start={0} end={65} duration={5} suffix="+" />
              </h1>
              <h4>Staff Members</h4>
            </div>
            <div className="lg:p-10 sm:p-6 border-stone-300 border rounded-xl bg-white">
              <h1 className="text-5xl font-playfair pb-3">
                <CountUp start={0} end={100} duration={5} suffix="%" />
              </h1>
              <h4>Satisfied Customers</h4>
            </div>
          </div>
        </div>
        <img src={about4} alt="about4" />
      </div>
      <Reviews/>
    </div>
  );
};

export default About;
