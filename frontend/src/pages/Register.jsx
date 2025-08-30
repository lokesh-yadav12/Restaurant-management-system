import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });

      toast.success("🎉 Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-4 justify-center bg-gradient-to-r from-yellow-50 to-orange-100 px-4">
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-4 rounded-2xl shadow-lg relative bottom-8"
      >
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-800">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 rounded-lg"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-3 rounded-lg"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-3 rounded-lg"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Register
        </button>

        {/* Divider */}
        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Already have an account */}
        <div className="text-center pb-2">
          <p className="text-gray-600 mb-2">Already have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
