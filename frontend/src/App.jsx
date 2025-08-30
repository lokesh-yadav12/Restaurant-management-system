import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Reservations from "./pages/Reservations";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";
import About from "./pages/About";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Payment from "./pages/Payment";
import Stripe from "./pages/Stripe";
import Razorpay from "./pages/Razorpay";
import ShowReservations from "./pages/ShowReservations";
import Complain from "./pages/Complain";
import Dashboard from "./pages/Dashboard";

function PrivateRoute({ children, roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <div className=" flex flex-col ">
      <CartProvider>
      <Navbar />
        <Routes>
          <Route path="/show-reservations" element={<ShowReservations />} />
          <Route path="/complain" element={<Complain />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/Stripe" element={<Stripe />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/razorpay" element={<Razorpay />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/admin" element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>} />
          <Route path="/staff" element={<StaffDashboard />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/dashboard"  element={<Dashboard />}/>
          <Route  path="/Profile"  element={<Profile />}/>
          <Route  path="/Analytics"  element={<Analytics />}/>
        </Routes>
     </CartProvider>
      <Footer />
    </div>
  );
}
