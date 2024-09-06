import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-footer.png";
import food from "../imgs/footer-img.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#474747] text-white pt-32 px-40">
      <div className="pb-32 flex justify-between flex-wrap gap-3">
        <div className="">
          <img src={logo} alt="logo" className="pb-8 pt-2" />
          <p className="text-start text-stone-400 pb-8">
            In the new era of technology we look a<br />
            in the future with certainity and pride to
            <br />
            for our company and.
          </p>
          <div className="flex gap-2">
            <FaTwitter className="size-8 bg-[#AD343E] p-2 rounded-full" />
            <FaFacebookF className="size-8 bg-[#AD343E] p-2 rounded-full" />
            <FaInstagram className="size-8 bg-[#AD343E] p-2 rounded-full" />
            <IoLogoGithub className="size-8 bg-[#AD343E] p-2 rounded-full" />
          </div>
        </div>

        <div className="text-start">
          <h3 className="text-white font-semibold pb-7">Pages</h3>
          <ul className="text-stone-300">
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Pricing
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">Blog</li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Contact
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Delivery
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h3 className="text-white font-semibold pb-7">Utility Pages</h3>
          <ul className="text-stone-300">
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Start Here
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Styleguide
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Password Protected
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              404 Not Found
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Licenses
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              Changelog
            </li>
            <li className="pb-4 hover:text-[#AD343E] cursor-pointer">
              View More
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h3 className="text-white font-semibold pb-7">
            Follow Us On Instagram
          </h3>
          <img src={food} alt="food" className="" />
        </div>
      </div>

      <div className="border-t-[2px] border-stone-700 pt-7 pb-14">
        <span className="text-stone-400">
          Copyright &copy; 2023 Hashtag Developer. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
