import React from "react";
import delivery from "../imgs/delivery.png";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

const Delivery = () => {
  return (
    <div className="bg-stone-50 p-32 flex justify-center lg:gap-20 md:gap-14 font-poppins md:flex-row sm:flex-col">
      <img src={delivery} className="lg:w-[50%] sm:w-full" alt="delivery" />
      <div className="text-start pt-20">
        <h1 className="lg:text-6xl font-playfair pb-6 sm:text-5xl">
          Fastest Food
          <br />
          Delivery in City
        </h1>
        <span>
          Our visual designer lets you quicly and of drag a down
          <br />
          your way to customapps for both keep desktop.
        </span>
        <ul className="pt-10">
          <li className="flex gap-2 items-center pb-3">
            <FaRegClock className="text-white size-8 bg-[#AD343E] p-2 rounded-full" />
            Delivery with 30 minutes
          </li>
          <li className="flex gap-2 items-center pb-3">
            <HiOutlineReceiptPercent className="text-white size-8 bg-[#AD343E] p-2 rounded-full" />
            Best Offer & Prices
          </li>
          <li className="flex gap-2 items-center pb-3">
            <AiOutlineShoppingCart className=" text-white size-8 bg-[#AD343E] p-2 rounded-full" />
            Online Services Availabe
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Delivery;
