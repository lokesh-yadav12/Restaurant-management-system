import Product from "../models/Product.js";

// export const addProduct = async (req, res) => {
//   try {
//     const { name, price, description } = req.body;

//     const newProduct = new Product({
//       name,
//       price,
//       description,
//       image: req.file ? `/uploads/${req.file.filename}` : null,
//     });

//     await newProduct.save();

//     res.status(201).json({ success: true, message: "Product added!", product: newProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// controllers/productController.js

//backend/controllers/productController.js → addProduct()
export const addProduct = async (req, res) => {
  try {
    const filename = req.file.filename; // multer stores this
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: [`/uploads/${filename}`], // ✅ save relative path only
    });
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;  // ✅ use params, not body
    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
