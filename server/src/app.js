import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routes.js';
import connectDB from './config/db.js';


const app = express();
connectDB();



// Needed because ES modules don't have __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -------------------- MIDDLEWARE --------------------
const allowedOrigins = [
  "http://localhost:3000",            // Local dev
  "https://writersroom.onrender.com"  // Production frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json());

// -------------------- SERVE REACT BUILD --------------------

// Serve static React files
app.use(express.static(path.join(__dirname, "../../client/build")));

// For all other routes, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

// -------------------- API ROUTES --------------------
app.use('/api/auth', authRoutes);

// Health check for deployment & monitoring
app.get('/api/health', (req, res) => {
  res.json({ status: "Backend connected ✅" });
});

export default app;

//cd client && npm install && npm run build && cd server && npm install