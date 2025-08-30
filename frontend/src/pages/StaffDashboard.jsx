import React, { useEffect, useState } from "react";
import axios from "axios";

const StaffDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Staff Dashboard</h2>
      <h3 className="text-xl font-semibold mb-4">Incoming Orders</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2">Order ID</th>
            <th className="border px-3 py-2">Items</th>
            <th className="border px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td className="border px-3 py-2">{o._id}</td>
              <td className="border px-3 py-2">
                {o.items.map((i) => `${i.name} x ${i.qty}`).join(", ")}
              </td>
              <td className="border px-3 py-2">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDashboard;
