import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import connectDB from "./config/db.js";

const app = express();
connectDB();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://WritersRoom.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
}));


app.use(express.json());

app.use('/api/auth', authRoutes);

// Health check for deployment & monitoring
app.get('/api/health', (req, res) => {
  res.json({ status: "Backend connected ✅" });
});



export default app;
