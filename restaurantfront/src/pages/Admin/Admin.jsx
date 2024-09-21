import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Users from "./Users";
import Bookings from "./Bookings";

const Admin = ({ onLogout }) => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/menu/")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/menu/${id}/delete_item/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => setItems(items.filter((item) => item.id !== id)))
      .catch((error) => console.error("Error deleting item:", error));
  };

  const handleLogout = () => {
    onLogout();
  };
  return (
    <div className="font-poppins bg-stone-50 pt-20">
    <Users/>
    <Bookings/>
      <div>
        <h1 className="text-6xl font-playfair pb-10">Menu</h1>
        <div className="p-10 bg-white rounded-xl lg:mx-40 md:mx-20 sm:mx-10 mb-8">
          <div className="flex justify-center">
            <table className="text-center">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-10">Category</th>
                  <th className="py-4 px-10">Name</th>
                  <th className="py-4 px-10">Price</th>
                  <th className="py-4 px-10">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr className="border-b" key={item.id}>
                    <td className="py-4 px-10">{item.category}</td>
                    <td className="py-4 px-10">{item.name}</td>
                    <td className="py-4 px-10">{item.price}</td>
                    <td className="py-4 px-10">
                      <Link to={`/edit_menu/${item.id}`} className="">
                        <button className="p-2 bg-[#AD343E] text-white rounded-lg mb-3">
                          Edit
                        </button>
                      </Link>
                      <br />
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-[#AD343E] rounded-lg text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/create_item">
            <button className="mt-5 hover:duration-700 rounded-full py-[8px] px-6 mb-10 bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent">
              Create New Item
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-end pr-40">
        <button
          onClick={handleLogout}
          className="hover:duration-700 rounded-full py-[8px] px-6 mb-10 bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
