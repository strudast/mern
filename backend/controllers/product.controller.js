import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get products", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please include all required fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
//put method for all fields, patch for some
export const updatedProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body; //user will send this data

  if (mongoose.Types.ObjectId.isValid(id) === false) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  } //check if the id is valid
  //if not, return error
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in Update product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error(
      "Error in Delete product or product not found",
      error.message
    );
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
