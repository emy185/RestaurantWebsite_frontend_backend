import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";

const EditMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/menu/${id}/update_item/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setItem({
          category: response.data.category,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          image: null,
        });
        setCurrentImageUrl(response.data.image);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        setError("Error fetching item. Please try again.");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleFileChange = (e) => {
    setItem((prevItem) => ({ ...prevItem, image: e.target.files[0] }));
    const file = e.target.files[0];
    if (file) {
      setCurrentImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", item.category);
    formData.append("name", item.name);
    formData.append("price", item.price);
    formData.append("description", item.description);

    if (item.image) {
      formData.append("image", item.image);
    }

    axios
      .put(`http://127.0.0.1:8000/api/menu/${id}/update_item/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        navigate("/admin");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response:", error.response.data);
          setError(
            `Error updating item: ${JSON.stringify(error.response.data)}`
          );
        } else if (error.request) {
          console.error("Error request:", error.request);
          setError("No response from server. Please try again.");
        } else {
          console.error("Error", error.message);
          setError("An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="font-poppins bg-stone-50 py-20">
      <h1 className="text-6xl font-playfair pb-10">Edit Item</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
              value={item.category}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
          <div>
            <b>Name: </b>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={handleChange}
              className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
            />
          </div>
          <div>
            <b>Price: </b>
            <input
              type="text"
              name="price"
              value={item.price}
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
              defaultValue={currentImageUrl}
            />
          </div>
          <div>
            <b className="text-start">Description: </b>
            <input
              type="text"
              name="description"
              value={item.description}
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
          Save the Changes
        </button>
      </form>
    </div>
  );
};

export default EditMenu;
