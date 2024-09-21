import React from "react";
import menu from "../imgs/menu.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get("http://127.0.0.1:8000/api/menu/")
        .then((response) => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching menu items:", error);
        });

      axios
        .get("http://127.0.0.1:8000/api/categories/")
        .then((response) => {
          setCategories(response.data.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }

    fetchData();
  }, []);

  function handleCategoryClick(category) {
    if (category === "All") {
      axios
        .get("http://127.0.0.1:8000/api/menu/")
        .then((response) => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching all items:", error);
        });
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/menu/?category=${category}`)
        .then((response) => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching items by category:", error);
        });
    }
  }

  return (
    <div className="font-poppins">
      <div className="py-16">
        <h1 className="text-6xl font-playfair pb-2">Our Menu</h1>
        <span className="text-[12px]">
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </span>
        <div className="py-10 flex gap-3 flex-wrap justify-center">
          <button
            onClick={() => handleCategoryClick("All")}
            className="py-1 px-5 border rounded-full hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]"
          >
            All
          </button>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(cat.category)}
              className="py-1 px-5 border rounded-full hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]"
            >
              {cat.category}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 px-32">
          {items.map((item) => (
            <div className="pb-6 w-fit border rounded-xl">
              <img
                src={`http://127.0.0.1:8000/${item.image}`}
                className="w-[300px] h-[225px] pb-6 rounded-xl"
              />
              <div className="grid gap-3">
                <b className="text-[#AD343E] text-[20px]">L.E {item.price}</b>
                <b>{item.name}</b>
                <span className="text-[12px]">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:gap-32 sm:gap-10 bg-stone-50 py-20">
        <div className="pt-10">
          <h1 className="text-5xl font-playfair pb-6 text-start">
            You can order
            <br />
            through apps
          </h1>
          <p className="text-start text-[14px]">
            Lorem ipsum dolor sit amet consectetur
            <br />
            adipiscing alit enim bibendum sed et aliquet
            <br />
            aliquet risus tempor semper.
          </p>
        </div>
        <img src={menu} alt="delivery" className="w-[40%]" />
      </div>
    </div>
  );
};

export default Menu;
