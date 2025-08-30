
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [{ name: String, quantity: Number, size: String }],
    amount: Number,
    address: {
      firstName: String,
      lastName: String,
      street: String,
      city: String,
      state: String,
      country: String,
      zipcode: String,
      phone: String,
    },
    paymentMethod: String,
    payment: { type: Boolean, default: false },
    status: { type: String, default: "Order Placed" }, // 👈 default
    date: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);







// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         name: String,
//         size: String,
//         quantity: Number,
//         price: Number,
//       },
//     ],
//     address: {
//       firstName: String,
//       lastName: String,
//       street: String,
//       city: String,
//       state: String,
//       country: String,
//       zipcode: String,
//       phone: String,
//     },
//     amount: Number,
//     paymentMethod: String,
//     payment: { type: Boolean, default: false },
//     status: { type: String, default: "Order Placed" },
//     date: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Order", orderSchema);
