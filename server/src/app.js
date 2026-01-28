import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

//test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/test', (req, res) => {
  res.json({ message: 'Auth route works' });
});

export default app;
