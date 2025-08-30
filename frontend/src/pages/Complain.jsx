import React, { useState } from "react";

const Complain = () => {
  const [email, setEmail] = useState("");
  const [complain, setComplain] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !complain) {
      setMsg("⚠️ Please fill all fields");
      return;
    }

    // Here you can send the data to your backend API
    console.log({ email, complain });

    setMsg("✅ Complaint submitted successfully!");
    setEmail("");
    setComplain("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Submit Your Complaint
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Complaint Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Complaint:
            </label>
            <textarea
              value={complain}
              onChange={(e) => setComplain(e.target.value)}
              placeholder="Write your complaint here..."
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Message */}
        {msg && (
          <p className="text-center mt-4 font-medium text-green-600">{msg}</p>
        )}
      </div>
    </div>
  );
};

export default Complain;
