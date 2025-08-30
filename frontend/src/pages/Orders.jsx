import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
   
    const filteredOrders = savedOrders.filter(order => order.total > 0);
    setOrders(filteredOrders);
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-orange-50 to-yellow-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
        {orders.length > 0 && (
          <button
            onClick={handleClearOrders}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition"
          >
            Clear Orders
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow-md">
              <h2 className="font-semibold mb-2 ">
                Order Date: {new Date(order.date).toLocaleString()}
              </h2>
              <p>Payment Method: {order.method}</p>
              <p>Total: ₹{order.total}</p>
              <div className="mt-2 space-y-1">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
