import express from 'express';
const app = express(); 
import episodeRoutes from './routes/episodes.routes.js'

app.use(express.json());

app.use('/api/episodes', episodeRoutes);

export default  app;
