import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { adminLogin } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin", async (req, res) => {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        return res.json({ success: true, token });
    }
    return res.json({ success: false, message: "Incorrect email or password" });
});

export default router;
