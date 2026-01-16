import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'Writer’s Room API OK' });
});

export default router;
