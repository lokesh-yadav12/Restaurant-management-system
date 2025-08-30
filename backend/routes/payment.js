// import express from "express";
// import Razorpay from "razorpay";
// import crypto from "crypto";

// const router = express.Router();

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // Create order
// router.post("/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     if (!amount || amount <= 0) {
//       return res.status(400).json({ error: "Invalid amount" });
//     }

//     const options = {
//       amount: amount * 100, // amount in paisa
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);
//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// // Verify payment
// router.post("/verify-payment", (req, res) => {
//   const { order_id, payment_id, signature } = req.body;

//   const body = order_id + "|" + payment_id;
//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   if (expectedSignature === signature) {
//     res.json({ success: true });
//   } else {
//     res.status(400).json({ success: false });
//   }
// });

// export default router;
