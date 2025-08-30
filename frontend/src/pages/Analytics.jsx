import React from "react";

const Analytics = () => {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-orange-50 to-yellow-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Restaurant Analytics Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="shadow-xl rounded-2xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">₹ 67,000</p>
        </div>

        <div className="shadow-xl rounded-2xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-2">Total Reservations</h2>
          <p className="text-2xl font-bold text-blue-600">152</p>
        </div>

        <div className="shadow-xl rounded-2xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-2">Dishes Sold</h2>
          <p className="text-2xl font-bold text-orange-600">1,240</p>
        </div>

        <div className="shadow-xl rounded-2xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
          <p className="text-2xl font-bold text-purple-600">4.7 ⭐</p>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-100 shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Insights & Highlights
        </h2>

        <ul className="space-y-4 text-gray-600">
          <li>
            ✅ Most reserved day: <span className="font-bold">Saturday</span>
          </li>
          <li>
            ✅ Peak time: <span className="font-bold">7:00 PM – 9:00 PM</span>
          </li>
          <li>
            ✅ Best-selling dish: <span className="font-bold">Paneer Butter Masala</span>
          </li>
          <li>
            ✅ Most loyal customer: <span className="font-bold">Rahul Sharma</span> (12 visits)
          </li>
          <li>
            ✅ Monthly growth rate:{" "}
            <span className="font-bold text-green-600">+15%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
