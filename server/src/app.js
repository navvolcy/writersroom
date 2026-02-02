import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./config/db.js";

const app = express();
connectDB();

/* ===============================
   Fix for __dirname in ES Modules
================================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===============================
   Middleware
================================= */
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://writersroom.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

/* ===============================
   API Routes
================================= */
app.use("/api/auth", authRoutes);

// Health check (used to confirm backend is alive)
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend connected ✅" });
});

/* ===============================
   Serve React Build (CRITICAL)
================================= */

// Serve static files from React
app.use(express.static(path.join(__dirname, "../../client/build")));

// Let React Router handle ALL non-API routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


export default app;
