import React, { useState, useEffect } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [updatedBookingIds, setUpdatedBookingIds] = useState(() => {
    const storedIds = localStorage.getItem("updatedBookingIds");
    return storedIds ? new Set(JSON.parse(storedIds)) : new Set();
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin_bookings/",
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

    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/bookings/${bookingId}/status/`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );

      setUpdatedBookingIds((prevIds) => {
        const newIds = new Set(prevIds);
        newIds.add(bookingId);
        localStorage.setItem(
          "updatedBookingIds",
          JSON.stringify(Array.from(newIds))
        );
        return newIds;
      });
    } catch (err) {
      setError(err.response ? err.response.data.error : err.message);
    }
  };

  return (
    <div className="font-poppins bg-stone-50">
      <h1 className="text-6xl font-playfair pb-10 pt-20">All Bookings</h1>
      <div className="p-10 bg-white rounded-xl mx-28">
        <div className="overflow-x-auto">
          <table className="text-center min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-10">ID</th>
                <th className="py-4 px-10">Username</th>
                <th className="py-4 px-10">Phone</th>
                <th className="py-4 px-10">Number of Guests</th>
                <th className="py-4 px-10">Booking Date</th>
                <th className="py-4 px-10">Booking Time</th>
                <th className="py-4 px-10">Status</th>
                <th className="py-4 px-10">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr className="border-b" key={booking.id}>
                  <td className="py-4 px-10">{index + 1}</td>
                  <td className="py-4 px-10">{booking.username}</td>
                  <td className="py-4 px-10">{booking.phone}</td>
                  <td className="py-4 px-10">{booking.num_guests}</td>
                  <td className="py-4 px-10">{booking.booking_date}</td>
                  <td className="py-4 px-10">{booking.booking_time}</td>
                  <td className="py-4 px-10">{booking.status}</td>
                  {!updatedBookingIds.has(booking.id) && (
                    <td className="py-4 px-10">
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          handleStatusChange(booking.id, e.target.value)
                        }
                      >
                        <option value="">Select status</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
