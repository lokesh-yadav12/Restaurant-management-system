import React from "react";
import { useCart } from "../context/CartContext";

const MenuCard = ({ name, price, image, description }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image?.[0] ? `${import.meta.env.VITE_BACKEND_URL}${image[0]}` : "/placeholder.jpg"}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-orange-500">₹{price}</span>
          <button
            onClick={() => addToCart({ name, price, image })}
            className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
