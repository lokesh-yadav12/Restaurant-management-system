import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { totalCount } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to check for user info
  const checkUserInfo = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    // Check user info on mount
    checkUserInfo();

    // Listen for storage changes (when user logs in from another tab)
    const handleStorageChange = (e) => {
      if (e.key === "userInfo") {
        checkUserInfo();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event listener for login/logout within the same tab
    const handleAuthChange = () => {
      checkUserInfo();
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const authenticatedNavLinks = [
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-50 to-orange-100 text-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-4xl font-extrabold text-green-700">EZCHEF</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Nav Links */}
          <ul className="flex space-x-8 font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-red-400 text-black transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            
            {/* Authenticated Nav Links - Only show when logged in */}
            {user && authenticatedNavLinks.map((link, index) => (
              <motion.li
                key={`auth-${index}`}
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-red-400 text-black transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Cart - Only show when user is logged in */}
          {user && (
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="hover:text-red-400" />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </Link>
          )}

          {/* Auth Section */}
          {!user ? (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-white bg-green-300 hover:bg-white hover:text-green-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-green-400 hover:bg-red-400 transition"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-2">
                <User size={26} className="text-green-700 hover:text-red-400" />
                <span className="hidden md:inline font-medium">{user.name || "Profile"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white text-black shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4 font-medium">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block hover:text-red-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              {/* Authenticated Nav Links for Mobile - Only show when logged in */}
              {user && authenticatedNavLinks.map((link, index) => (
                <motion.li
                  key={`mobile-auth-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: (navLinks.length + index) * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block hover:text-red-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              {/* Cart - Only show when user is logged in */}
              {user && (
                <Link
                  to="/cart"
                  className="flex items-center space-x-2 hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                  {totalCount > 0 && (
                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalCount}
                    </span>
                  )}
                </Link>
              )}

              {/* Auth Section */}
              {!user ? (
                <div className="flex space-x-4">
                  <Link
                    to="/login"
                    className="w-1/2 text-center px-4 py-2 rounded-lg border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="w-1/2 text-center px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 hover:text-red-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={20} />
                    <span>{user.name || "Profile"}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}