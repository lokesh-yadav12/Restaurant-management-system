import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">Order #{order._id}</h3>
      <p className="text-gray-600">Status: {order.status}</p>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        {order.items.map((i, index) => (
          <li key={index}>
            {i.name} x {i.qty}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold">Total: ₹{order.totalPrice}</p>
    </div>
  );
};

export default OrderCard;
