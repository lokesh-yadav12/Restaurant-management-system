import express from "express";
import Reservation from "../models/reservation.js";

const router = express.Router();

// POST /api/reservations
router.post("/", async (req, res) => {
  try {
    const { name, date, time, guests } = req.body;
    if (!name || !date || !time || !guests) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReservation = new Reservation({ name, date, time, guests });
    await newReservation.save();

    res.status(201).json({ message: "Reservation booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/reservations (optional: to list all reservations)
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
