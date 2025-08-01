import express from "express";
import bodyParser from "body-parser";
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

// ⬇️ Needed to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==========================
// ✅ Middleware Setup
// ==========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// ==========================
// ✅ API Routes
// ==========================
app.use("/api/users", userRoutes);         // Or use "/" if needed
app.use("/api/auth", authRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/contact", contactRoutes);

// ==========================
// ✅ Serve Frontend React App
// ==========================
const frontendDist = path.join(__dirname, "../client/dist");
app.use(express.static(frontendDist));

// For React Router: fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

// ==========================
// ✅ Error Handling
// ==========================
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
