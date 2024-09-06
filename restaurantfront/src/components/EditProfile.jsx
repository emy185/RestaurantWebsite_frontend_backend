import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setFormData(response.data))
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 401) {
          alert("You are not authorized. Please log in.");
          navigate("/login");
        }
      });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .put("http://127.0.0.1:8000/api/profile/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        }
      });
  };

  return (
    <div className="font-poppins bg-stone-50 pb-20">
      <h1 className="text-6xl font-playfair pb-10 pt-10">Edit My Profile</h1>
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded-xl lg:mx-40 md:mx-20 sm:mx-8">
        <div className="grid md:grid-cols-2 text-start gap-3 sm:grid-cols-1">
          <div>
            <b>First Name: </b>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
            {errors.first_name && <p>{errors.first_name}</p>}
          </div>
          <div>
            <b>Last Name: </b>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
            {errors.last_name && <p>{errors.last_name}</p>}
          </div>
          <div>
            <b>Email: </b>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <b>Phone: </b>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div>
            <b>Password: </b>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3 mb-4"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button
          type="submit"
          name="submit"
          className="hover:duration-700 rounded-full py-[8px] px-6 bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
