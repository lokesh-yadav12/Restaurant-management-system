import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/reservations`);
        setReservations(res.data);
      } catch (err) {
        console.error("Error fetching reservations", err);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">All Reservations</h2>

      {reservations.length === 0 ? (
        <p className="text-center text-gray-600 text-sm md:text-base">No reservations yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-orange-50 rounded-xl shadow-lg p-4 md:p-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-orange-200">
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-sm md:text-base">Name</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-sm md:text-base">Date</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-sm md:text-base">Time</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 text-sm md:text-base">Guests</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base">{r.name}</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base">{r.date}</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base">{r.time}</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base">{r.guests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShowReservations;
