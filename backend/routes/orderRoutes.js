import express from "express";
import { placeOrder, getOrders, updateOrderStatus } from "../controllers/orderController.js";
import { protect, staffOrAdmin } from "../middleware/authMiddleware.js";
import { listOrders, updateOrderStatus } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/list", authMiddleware, listOrders); 
router.post("/status", authMiddleware, updateOrderStatus);

router.post("/", protect, placeOrder);
router.get("/", protect, getOrders);
router.put("/:id/status", protect, staffOrAdmin, updateOrderStatus);

export default router;








// import express from "express";
// import Order from "../models/Order.js";

// const router = express.Router();

// // 🟢 User places order
// router.post("/place", async (req, res) => {
//   try {
//     const order = new Order(req.body);
//     await order.save();
//     res.json({ success: true, message: "Order placed successfully", order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // 🟢 Admin fetch all orders
// router.post("/list", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.json({ success: true, orders });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // 🟢 User fetch own orders
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json({ success: true, orders });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // 🟢 Admin updates order status
// router.post("/status", async (req, res) => {
//   try {
//     const { orderId, status } = req.body;
//     await Order.findByIdAndUpdate(orderId, { status });
//     res.json({ success: true, message: "Order status updated" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// export default router;
