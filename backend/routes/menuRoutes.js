import express from "express";
import { createMenuItem, getMenu, updateMenuItem, deleteMenuItem } from "../controllers/menuController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getMenu); // public
router.post("/", protect, adminOnly, createMenuItem);
router.put("/:id", protect, adminOnly, updateMenuItem);
router.delete("/:id", protect, adminOnly, deleteMenuItem);

export default router;
