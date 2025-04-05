import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controllers/product.controller.js"; //importing the controller

const router = express.Router();

router.get("/", getProducts); //get all products
router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;
