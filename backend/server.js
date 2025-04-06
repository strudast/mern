import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; //if the port is not defined in the env file, use 5000
app.use(express.json()); //allows to accept JSON data in the req.body
app.use("/api/products", productRoutes); //mounting the router to the app
app.listen(PORT, () => {
  connectDB();
  console.log("MongoDB connected successfully");
  console.log("Server started at http://localhost:" + PORT);
});
