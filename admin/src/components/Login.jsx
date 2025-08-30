import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded Admin Credentials
  const ADMIN_EMAIL = "lokesh916635@gmail.com";
  const ADMIN_PASSWORD = "123456";

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Entered:", email, password);

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const fakeToken = "hardcoded_admin_token";
    setToken(fakeToken);
    localStorage.setItem("token", fakeToken);
    toast.success("Login successful!");
    navigate("/add");
  } else {
    console.log("Failed match", email, password);
    toast.error("Incorrect email or password!");
  }
};


  return (
    <div className="flex items-center pb-28 justify-center h-screen bg-gradient-to-r from-orange-50 to-yellow-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
