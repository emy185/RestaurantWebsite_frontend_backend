import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import map from "../imgs/1.png";

const Book = () => {
  const [phone, setPhone] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/book/",
        {
          phone,
          num_guests: numGuests,
          booking_date: bookingDate,
          booking_time: bookingTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Booking created:", response.data);
      setPhone("");
      setNumGuests("");
      setBookingDate("");
      setBookingTime("");
      navigate("/profile");
    } catch (error) {
      console.error("Failed to create booking:", error);
    }
  };

  return (
    <div className="relative pt-12 bg-stone-50 font-poppins">
      <h1 className="text-7xl font-playfair pb-2">Book A Table</h1>
      <span className="text-[12px]">
        We consider all the drivers of change gives you the components
        <br />
        you need to change to create a truly happens.
      </span>
      <div className="absolute z-2 bg-white lg:top-[22%] xl:left-[30%] lg:left-[25%] md:left-[18%] sm:top-[25%] sm:left-[27%]">
        <div className="h-fit text-center">
          <div className="p-10 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] w-fit rounded-2xl text-start">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                  <label htmlFor="date" className="font-semibold">
                    Date
                  </label>
                  <br />
                  <input
                    type="date"
                    id="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="font-semibold">
                    Time
                  </label>
                  <br />
                  <input
                    type="time"
                    id="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="px-[10px] py-[8px] font-small border rounded-full w-64 mt-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-semibold">
                    Phone
                  </label>
                  <br />
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="x-xxx-xxx-xxxx"
                    className="px-[10px] py-[8px] placeholder:text-gray-500 font-small border rounded-full w-64 mt-3 mb-4"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="total_person" className="font-semibold">
                    Total Person
                  </label>
                  <br />
                  <input
                    type="number"
                    id="total_person"
                    defaultValue="1"
                    min="1"
                    value={numGuests}
                    onChange={(e) => setNumGuests(e.target.value)}
                    className="px-[10px] py-[8px] font-small border rounded-full mt-3 mb-4 w-64"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                className="hover:duration-700 rounded-full w-full py-[8px] bg-[#AD343E] text-white hover:text-black hover:border-black hover:border hover:bg-transparent"
              >
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </div>
      <img src={map} alt="map" className="w-full pt-80" />
    </div>
  );
};

export default Book;
