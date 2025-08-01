import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// MongoDB setup
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("✅ Connected to the database!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start the server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("✅ Server started on port %s.", config.port);
});
