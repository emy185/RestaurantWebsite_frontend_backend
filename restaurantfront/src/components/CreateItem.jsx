import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/menu/create/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        setSuccess("Menu item created successfully!");
        setFormData({
          name: "",
          price: "",
          description: "",
          category: "",
          image: null,
        });
        navigate("/admin");
      } else {
        setError("Failed to create menu item.");
      }
    } catch (error) {
      setError("An error occurred while creating the menu item.");
    }
  };
  return (
    <div className="font-poppins bg-stone-50 py-20">
      <h1 className="text-6xl font-playfair pb-10">Create Item</h1>
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded-xl lg:mx-40 md:mx-20 sm:mx-8"
      >
        <div className="grid md:grid-cols-2 text-start gap-3 sm:grid-cols-1">
          <div>
            <b>Category: </b>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
          <div>
            <b>Name: </b>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
          <div>
            <b>Price: </b>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
          <div>
            <b>Image: </b>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <b className="text-start">Description: </b>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
        </div>
        <button
          type="submit"
          name="submit"
          className="hover:duration-700 rounded-full py-[8px] px-6 bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent"
        >
          Create Item
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
