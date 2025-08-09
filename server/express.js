// server/express.js
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

// Route imports
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import checkoutRoutes from "./routes/checkout.routes.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

// ===== Middleware =====
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// ===== API Routes =====
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/contact", contactRoutes);

// ===== Production static build =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(process.cwd(), "dist/app");

// Serve static files from the dist folder
app.use(express.static(distDir));

// SPA Fallback: send index.html for all non-API/non-auth routes
app.get(/^(?!\/(api|auth)\/?).*/, (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

// ===== Error handling =====
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.error(err);
  }
});

export default app;
