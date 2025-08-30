import React, { useState } from "react";
import ReservationForm from "../components/ReservationForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (form) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/reservations`, form);
      setMsg("Reservation booked successfully!");
    } catch (err) {
      setMsg("Error booking reservation");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100">
      <ReservationForm onSubmit={handleReservation} />

      {msg && <p className="text-center mt-4 text-green-700 font-bold">{msg}</p>}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/show-reservations")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Go to Reservations
        </button>
      </div>
    </div>
  );
};

export default Reservations;
