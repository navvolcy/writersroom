//Defines API endpoints (URLs), receives request , pass control to controllers
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'Writer’s Room API OK' });
});

// call on endpoints and calls writers.controll.js to preform the logic in the db
router.get()

export default router;
