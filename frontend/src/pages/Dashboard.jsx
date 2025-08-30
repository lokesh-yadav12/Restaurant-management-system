// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    { title: "Menu", desc: "View and manage restaurant menu", path: "/menu" },
    { title: "Orders", desc: "Track and manage customer orders", path: "/orders" },
    { title: "Reservations", desc: "Handle table bookings", path: "/reservations" },
    
    { title: "Profile", desc: "Manage your account", path: "/profile" },
    { title: "Analytics", desc: "View sales and performance metrics", path: "/analytics" },
    { title: "Complain message", desc: "If you face any issue let us update", path: "/complain" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">Welcome to Dashboard</h1>
      <p className="mb-6 text-gray-600 text-center">Manage your restaurant with ease</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            to={card.path}
            className="flex flex-col justify-center items-center p-10 h-48 rounded-2xl shadow-lg bg-orange-200 hover:bg-orange-100 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-500 hover:text-orange-700 text-center transition-colors">
              {card.title}
            </h2>
            <p className="text-gray-700 text-center">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
