import React from "react";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/img4.png";

const Services = () => {
  return (
    <div className="px-40 py-32 font-poppins">
      <h1 className="font-playfair text-6xl text-start pb-14">
        We also offer unique
        <br />
        services for your events
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center gap-8">
        <div className="text-start">
          <img src={img1} className="pb-5 w-[280px]" alt="caterings" />
          <b className="font-semibold">Caterings</b>
          <br />
          <span className="text-[12px]">
            In the new era of technology we look
            <br />
            in the future with certainity for life.
          </span>
        </div>
        <div className="text-start">
          <img src={img2} className="pb-5 w-[275px]" alt="birthdays" />
          <b className="font-semibold">Birthdays</b>
          <br />
          <span className="text-[12px]">
            In the new era of technology we look
            <br />
            in the future with certainity for life.
          </span>
        </div>
        <div className="text-start">
          <img src={img3} className="pb-5 w-[260px]" alt="weddings" />
          <b className="font-semibold">Weddings</b>
          <br />
          <span className="text-[12px]">
            In the new era of technology we look
            <br />
            in the future with certainity for life.
          </span>
        </div>
        <div className="text-start">
          <img src={img4} className="pb-5 w-[285px]" alt="events" />
          <b className="font-semibold">Events</b>
          <br />
          <span className="text-[12px]">
            In the new era of technology we look
            <br />
            in the future with certainity for life.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
