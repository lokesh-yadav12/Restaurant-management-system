import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/menu`).then((res) => setMenu(res.data));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <h3 className="text-xl font-semibold mb-4">Menu Items</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Price</th>
            <th className="border px-3 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item._id}>
              <td className="border px-3 py-2">{item.name}</td>
              <td className="border px-3 py-2">₹{item.price}</td>
              <td className="border px-3 py-2">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
