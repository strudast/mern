import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();
app.use(express.json()); //allows to accept JSON data in the req.body
app.use("/api/products", productRoutes); //mounting the router to the app
app.listen(5000, () => {
  connectDB();
  console.log("MongoDB connected successfully");
  console.log("Server started at http://localhost:5000");
});
