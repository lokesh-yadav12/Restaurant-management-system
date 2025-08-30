import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; // ✅ named import
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log({ ...form, cart, totalPrice });
  // redirect to payment page
  navigate("/payment");
};

  return (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Place Your Order</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required className="w-full p-2 border rounded"/>
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full p-2 border rounded"/>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-2 border rounded"/>
          <textarea name="address" value={form.address} onChange={handleChange} placeholder="Full Address" required className="w-full p-2 border rounded"/>
          <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" required className="w-full p-2 border rounded"/>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total: ₹{totalPrice}</span>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
