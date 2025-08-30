// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 w-full">
      <div className="grid md:grid-cols-4 gap-12 w-full">
        
        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Privacy</li>
            <li>Terms & Condition</li>
            <li>License Agreement</li>
          </ul>
        </motion.div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2">
            <li>Why Foaps</li>
            <li>Order Management</li>
            <li>Menu Management</li>
            <li>In-depth Reports</li>
            
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Success Stories</li>
            <li>Help & Support</li>
            <li>Restaurant Order Management</li>
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <p className="mb-3">lokesh916635@gmail.com</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/lokesh-kumar-0a7522271/" className="hover:text-blue-600"><FaLinkedin /></a>
            <a href="https://www.instagram.com/lokesh_yadav3078/?__pwa=1" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6 w-full"
      >
        Copyright ©2025{" "}
        <span className="text-white font-medium">Lokesh Kumar, IIIT Kottayam.</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
