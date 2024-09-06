import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/users/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUsers(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : err.message);
      }
    };

    fetchProfile();
  }, []);
  return (
    <div className="font-poppins bg-stone-50 pt-20">
      <h1 className="text-6xl font-playfair pb-10">All Users</h1>
      <div className="p-10 bg-white rounded-xl mx-40">
        <div className="overflow-x-auto">
          <table className="text-center">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-10">ID</th>
                <th className="py-4 px-10">Username</th>
                <th className="py-4 px-10">First Name</th>
                <th className="py-4 px-10">Last Name</th>
                <th className="py-4 px-10">Email</th>
                <th className="py-4 px-10">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="border-b">
                  <td className="py-4 px-10">{index + 1}</td>
                  <td className="py-4 px-10">{user.username}</td>
                  <td className="py-4 px-10">{user.firstname}</td>
                  <td className="py-4 px-10">{user.lastname}</td>
                  <td className="py-4 px-10">{user.email}</td>
                  <td className="py-4 px-10">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
