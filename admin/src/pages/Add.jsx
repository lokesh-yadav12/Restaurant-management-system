import React, { useState } from "react";
import api from "../axiosConfig";

const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); // new state
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description); // add description
      formData.append("price", price);
      formData.append("image", image);

      const { data } = await api.post("/api/product/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token"), // optional if you add JWT later
        },
      });

      alert("✅ Product added successfully!");
      console.log("Product added:", data);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
          required
        />

        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2"
          rows="3"
          required
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
