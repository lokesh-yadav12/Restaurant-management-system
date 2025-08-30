import React, { useState } from "react";

const ReservationForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Book a Reservation
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <input
        type="time"
        name="time"
        placeholder="enter the time"
        value={form.time}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <input
        type="number"
        name="guests"
        placeholder="no of people"
        
        value={form.guests}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Reserve
      </button>
    </form>
  );
};

export default ReservationForm;
