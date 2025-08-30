import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      
      // Dispatch custom event to notify navbar and other components
      window.dispatchEvent(new Event("authChange"));
      
      toast.success("Login Successful 🎉");

      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-12 flex items-start justify-center bg-gradient-to-r from-yellow-50 to-orange-100 px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Login to <span className="text-blue-600">EZCHEF</span>
        </h2>

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
            disabled={isLoading}
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
            autoComplete="current-password"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-200"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-2">New to EZCHEF?</p>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline font-medium"
            disabled={isLoading}
          >
            Create an Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;