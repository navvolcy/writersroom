import express, { json } from 'express';
const app = express();

app.use(json());


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
