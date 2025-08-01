import express from "express"; // ✅ FIXED
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Use global Promise
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("✅ Connected to the database!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Serve frontend build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.join(__dirname, "client", "dist");

app.use(express.static(frontendDist));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

// Start server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("✅ Server started on port %s.", config.port);
});
