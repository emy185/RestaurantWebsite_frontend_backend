import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = ({ onLogout }) => {
  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        setProfile(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : err.message);
      }
    };

    fetchProfile();
  }, []);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/my_bookings/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setBookings(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }
  const handleLogout = () => {
    onLogout();
  };
  return (
    <div className="font-poppins bg-stone-50">
      <div>
        <h1 className="text-6xl font-playfair pb-10 pt-20">My Profile</h1>
        <div className="p-10 bg-white rounded-xl lg:mx-40 md:mx-20 sm:mx-8">
          <div className="grid md:grid-cols-2 text-start gap-3 sm:grid-cols-1">
            <div>
              <b>First name: </b>
              <span>{profile.first_name}</span>
            </div>
            <div>
              <b>Last name: </b>
              <span>{profile.last_name}</span>
            </div>
            <div>
              <b>Email: </b>
              <span>{profile.email}</span>
            </div>
            <div>
              <b>Username: </b>
              <span>{profile.username}</span>
            </div>
            <div>
              <b>Phone: </b>
              <span>{profile.phone}</span>
            </div>
          </div>
          <Link
            to="/edit_profile"
            className="hover:duration-700 rounded-full py-[8px] px-6 mb-10 bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent"
          >
            Edit
          </Link>
        </div>
      </div>
      <div className="">
        <h1 className="text-6xl font-playfair pb-10 pt-20">My Bookings</h1>
        <div className="p-10 bg-white rounded-xl mx-40 mb-10">
          <div className="overflow-x-auto">
            <table className="text-center">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-10">ID</th>
                  <th className="py-4 px-10">Booking Date</th>
                  <th className="py-4 px-10">Booking Time</th>
                  <th className="py-4 px-10">Phone</th>
                  <th className="py-4 px-10">Number of Guests</th>
                  <th className="py-4 px-10">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr className="border-b">
                    <td className="py-4 px-10">{index + 1}</td>
                    <td className="py-4 px-10">{booking.booking_date}</td>
                    <td className="py-4 px-10">{booking.booking_time}</td>
                    <td className="py-4 px-10">{booking.phone}</td>
                    <td className="py-4 px-10">{booking.num_guests}</td>
                    <td className="py-4 px-10">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default Profile;
