import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import connectDB from './config/db.js';

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// CORS setup
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

// Body parser
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Health check for deployment & monitoring
app.get('/api/health', (req, res) => {
  res.json({ status: "Backend connected ✅" });
});

export default app;
