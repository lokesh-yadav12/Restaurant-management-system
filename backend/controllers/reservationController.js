import asyncHandler from "express-async-handler";
import Reservation from "../models/reservationModel.js";

// Create reservation
const createReservation = asyncHandler(async (req, res) => {
  const { date, time, partySize, tableNo } = req.body;
  if (!date || !time) {
    res.status(400);
    throw new Error("Date and time are required");
  }
  const reservation = await Reservation.create({
    customer: req.user._id,
    date,
    time,
    partySize: partySize ?? 2,
    tableNo,
  });
  res.status(201).json(reservation);
});

// Get reservations (admin -> all, customer -> own)
const getReservations = asyncHandler(async (req, res) => {
  if (req.user.role === "admin") {
    const list = await Reservation.find().populate("customer", "name email");
    return res.json(list);
  }
  const list = await Reservation.find({ customer: req.user._id });
  res.json(list);
});

// Update reservation (admin only for changing status/table etc)
const updateReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  if (!reservation) {
    res.status(404);
    throw new Error("Reservation not found");
  }

  // Only admin or the user who created it can cancel/update limited fields
  if (req.user.role !== "admin" && reservation.customer.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to update this reservation");
  }

  reservation.status = req.body.status ?? reservation.status;
  reservation.tableNo = req.body.tableNo ?? reservation.tableNo;
  reservation.partySize = req.body.partySize ?? reservation.partySize;
  reservation.date = req.body.date ?? reservation.date;
  reservation.time = req.body.time ?? reservation.time;

  const updated = await reservation.save();
  res.json(updated);
});

export { createReservation, getReservations, updateReservation };
