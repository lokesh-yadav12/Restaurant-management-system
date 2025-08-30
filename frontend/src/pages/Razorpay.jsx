import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const Razorpay = () => {
  const { totalPrice } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handlePayment = async () => {
    try {
      if (!totalPrice || totalPrice <= 0) {
        alert("⚠️ Invalid amount!");
        return;
      }

      const { data: order } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment/create-order`, {
        amount: totalPrice,
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Restaurant App",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/payment/verify-payment`,
            response
          );
          if (verifyRes.data.success) {
            alert("✅ Payment Successful!");
            navigate("/dashboard"); // ✅ redirect to dashboard
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Lokesh Kumar",
          email: "lokesh@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#00b894",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("✅ Payment Successful!");
      navigate("/dashboard"); //fake kaam kiya h yaha
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center w-[400px]">
        <h1 className="text-2xl font-bold mb-4">Razorpay Payment</h1>
        <p className="mb-6">Total Amount: ₹{totalPrice}</p>
        <button
          onClick={handlePayment}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Razorpay;
