import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-sm md:text-base">Your cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-4 rounded-xl shadow space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {/* Item Info */}
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={item.image?.[0] ? `${import.meta.env.VITE_BACKEND_URL}${item.image[0]}` : "/placeholder.jpg"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-orange-500 font-bold">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 bg-white p-4 rounded-xl shadow space-y-4 sm:space-y-0">
            <p className="text-xl md:text-2xl font-bold">
              Total: <span className="text-orange-500">₹{totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={() => navigate("/place-order")}
              className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
