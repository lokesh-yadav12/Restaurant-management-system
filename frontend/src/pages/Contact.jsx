import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can send this data to your API here if needed
    console.log({ name, email, message });

    // Show toast notification
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-100 min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-green-800 mb-8"
        >
          Contact Us
        </motion.h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Have questions, feedback, or special requests? We’d love to hear from you!
            </p>

            <div className="flex items-center space-x-4">
              <Mail className="text-green-600" />
              <span className="text-gray-700">lokesh916635@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700">+91 9166353078</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600" />
              <span className="text-gray-700">
                123 Food Street, Alwar, Rajasthan
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-50 to-orange-100 p-6 rounded-2xl shadow-lg space-y-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Send Us a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
