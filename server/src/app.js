import express from 'express';
import authRoutes from './routes/auth.routes.js';

const app = express();

//middleware
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
