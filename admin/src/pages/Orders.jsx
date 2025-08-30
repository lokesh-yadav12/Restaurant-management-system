import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // ✅ Fetch all orders
  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Change order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Order status updated ✅");
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📦 Orders Management</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="lg:flex md:flex gap-5 items-start border rounded-lg shadow-sm bg-white p-5 my-4"
          >
            {/* Order Icon */}
            <img src={assets.parcel_icon} alt="parcel" className="w-12 h-12" />

            {/* Order Details */}
            <div className="flex-1">
              <div className="text-sm text-gray-700">
                {order.items.map((item, idx) => (
                  <p key={idx} className="py-0.5">
                    {item.name} × {item.quantity}{" "}
                    <span className="text-gray-500">({item.size})</span>
                    {idx !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>

              <p className="mt-3 mb-1 font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-gray-600">
                {order.address.street}, {order.address.city}, {order.address.state},{" "}
                {order.address.country} - {order.address.zipcode}
              </p>
              <p className="text-gray-700">📞 {order.address.phone}</p>
            </div>

            {/* Order Info */}
            <div className="text-sm text-gray-700 min-w-[150px]">
              <p>🛒 Items: {order.items.length}</p>
              <p className="mt-1">💳 Method: {order.paymentMethod}</p>
              <p>
                💰 Payment:{" "}
                <span
                  className={
                    order.payment ? "text-green-600 font-semibold" : "text-red-500 font-semibold"
                  }
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>📅 Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Amount */}
            <p className="text-sm sm:text-base font-bold text-gray-800">
              {currency}
              {order.amount}
            </p>

            {/* Status Dropdown */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 border rounded-md ml-4 font-medium bg-gray-50 hover:bg-gray-100"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
