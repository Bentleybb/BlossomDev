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
  .then(() => {
    console.log("✅ Connected to the database!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Handle DB connection error
mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

// ------------------
// Serve frontend build
// ------------------

// This is needed to use __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from Vite build (client/dist)
const frontendDist = path.join(__dirname, "client", "dist");
app.use(express.static(frontendDist));

// SPA fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

// ------------------
// Start server
// ------------------
app.listen(config.port, (err) => {
  if (err) {
    console.error("❌ Server failed to start:", err);
  } else {
    console.info("✅ Server started on port %s.", config.port);
  }
});
