import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();

app.post("/products", (req, res) => {
  res.send("Serveris ready");
});
app.get("/products", (req, res) => {
  res.send("Serveris ready");
});

console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("MongoDB connected successfully");
  console.log("Server started at http://localhost:5000");
});
