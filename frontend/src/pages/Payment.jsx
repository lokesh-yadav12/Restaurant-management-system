import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify"; // ✅ import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const [method, setMethod] = useState(""); 
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const handlePayment = () => {
    if (!method) return toast.warn("Please select a payment method!");

    if (method === "cod") {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = {
        items: cartItems,
        total: totalPrice,
        method: "COD",
        date: new Date().toISOString(),
      };
      localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

      clearCart(); 

      toast.success("Order placed successfully!"); // ✅ show success toast

      setTimeout(() => {
        navigate("/orders"); 
      }, 1500);
    } else if (method === "razorpay") {
      navigate("/razorpay"); 
    } else if (method === "stripe") {
      navigate("/stripe"); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-28 justify-center items-center bg-gradient-to-r from-yellow-50 to-orange-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Choose Payment Method</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {["cod", "razorpay", "stripe"].map((m) => (
          <div
            key={m}
            className={`border rounded-lg p-6 flex flex-col items-center cursor-pointer hover:bg-orange-200 hover:shadow-lg transition ${
              method === m ? "border-green-500" : ""
            }`}
            onClick={() => setMethod(m)}
          >
            <img
              src={`/${m}-logo.png`}
              alt={m}
              className="w-20 h-20 rounded-full object-contain mb-4"
            />
            <span className="font-semibold">
              {m === "cod"
                ? "Cash on Delivery"
                : m.charAt(0).toUpperCase() + m.slice(1)}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handlePayment}
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Confirm Payment
      </button>

      {/* ✅ Toast container */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Payment;
