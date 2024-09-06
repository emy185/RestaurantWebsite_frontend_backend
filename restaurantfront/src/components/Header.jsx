import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pagesList = ["Login", "Register"];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(menu === dropdownOpen ? null : menu);
  };
  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="">
      {!isScrolled && (
        <div className="bg-[#474747] text-white py-3 px-40">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <FiPhone />
                <span className="sm:text-[14px] md:text-[16px]">
                  (414) 857 - 0107
                </span>
              </div>
              <div className="flex items-center gap-2">
                <LuMail />
                <span>yummy@bistrobliss</span>
              </div>
            </div>
            <div className="flex gap-2">
              <FaTwitter className="size-8 bg-neutral-600 p-2 rounded-full" />
              <FaFacebookF className="size-8 bg-neutral-600 p-2 rounded-full" />
              <FaInstagram className="size-8 bg-neutral-600 p-2 rounded-full" />
              <IoLogoGithub className="size-8 bg-neutral-600 p-2 rounded-full" />
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 z-10 w-full shadow-md py-5"
            : "pt-8 pb-5"
        } bg-stone-50 px-40`}
      >
        <nav className="flex justify-between items-center font-semibold">
          <div>
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div>
            {windowWidth >= 1024 ? (
              <ul className="flex xl:gap-8">
                <li className="hover:bg-[#DBDFD0] px-3 py-1 hover:rounded-full">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:bg-[#DBDFD0] px-3 py-1 hover:rounded-full">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:bg-[#DBDFD0] px-3 py-1 hover:rounded-full">
                  <Link to="/menu">Menu</Link>
                </li>
                <li
                  className="hover:bg-[#DBDFD0] px-3 py-1 hover:rounded-full relative inline-block text-left dropdown"
                  onMouseEnter={() => toggleDropdown("page")}
                  onMouseLeave={closeDropdown}
                >
                  Pages{" "}
                  {dropdownOpen === "page" && (
                    <div
                      className="dropdown-menu font-poppins"
                      onMouseLeave={closeDropdown}
                    >
                      <ul>
                        {pagesList.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/${item}`}
                              className="dropdown-item hover:text-[#DBDFD0]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li className="hover:bg-[#DBDFD0] px-3 py-1 hover:rounded-full cursor-pointer">
                  Contact
                </li>
              </ul>
            ) : (
              <div>
                <button
                  className="hover:bg-[#DBDFD0] px-3 py-2 hover:rounded-full"
                  onClick={() => toggleDropdown("menu")}
                >
                  <FaBars />
                </button>
                {dropdownOpen === "menu" && (
                  <div className="dropdown-menu font-poppins">
                    <ul>
                      <li className="dropdown-item hover:bg-[#DBDFD0]">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown-item hover:bg-[#DBDFD0]">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="dropdown-item hover:bg-[#DBDFD0]">
                        <Link to="/menu">Menu</Link>
                      </li>
                      <li className="dropdown-item hover:bg-[#DBDFD0]">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="dropdown-item hover:bg-[#DBDFD0]">
                        <Link to="/register">Register</Link>
                      </li>
                      <li className="dropdown-item hover:bg-[#DBDFD0] cursor-pointer">
                        Contact
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          <Link
            className="border-2 rounded-full px-5 py-2 border-black hover:bg-[#DBDFD0] hover:border-[#DBDFD0] hover:duration-700"
            to="/booking"
          >
            Book A Table
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
