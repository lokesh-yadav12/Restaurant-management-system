import express from "express";
import { addProduct, getProducts,removeProduct } from "../controllers/productController.js";
import upload from "../middleware/uploadMiddleware.js";
import Product from "../models/Product.js";
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to fetch products" });
  }
});


router.delete("/remove/:id", removeProduct);   // ✅ now it will work




// Add product (Admin)
// router.post("/add", upload.single("image"), addProduct);
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { name, price } = req.body;
    const filename = req.file.filename;

    const newProduct = new Product({
      name,
      price,
     image: [`/uploads/${filename}`]

      // ✅ full path stored
    });

    await newProduct.save();
    res.json({ success: true, message: 'Product added successfully!' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Something went wrong' });
  }
});



// Get all products (User menu)
router.get("/", getProducts);

export default router;
