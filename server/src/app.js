import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://writersroom.onrender.com' ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

//test route
app.get('/api/health', (req, res) => {
  res.json({ status: "Backend connected ✅" });
});



export default app;
