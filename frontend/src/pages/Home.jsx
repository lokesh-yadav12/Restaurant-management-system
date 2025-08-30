import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../images/homebg.jpg"; // <-- Add your background image in src/images
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ track login
  const navigate = useNavigate();

  const handleReservationClick = () => {
    if (isLoggedIn) {
      navigate("/reservations"); // ✅ go to reservations
    } else {
      navigate("/login"); // ✅ redirect to login if not logged in
    }
  };

  return (
    <div>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center bg-opacity-90 justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          {/* Animated Heading */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide"
          >
            Welcome to <span className="text-yellow-400">EZCHEF</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Where flavor meets passion. Enjoy delicious meals, a cozy atmosphere, 
            and world-class service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            {/* <Link
              to="/menu"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg font-semibold transition-all transform hover:scale-105"
            >
              🍽 View Menu
            </Link> */}

            {/* Book a Table (check login) */}
            {/* <button
              onClick={handleReservationClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl shadow-lg font-semibold transition-all transform hover:scale-105"
            >
              📅 Book a Table
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
