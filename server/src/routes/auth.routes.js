import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);

//work on getting the login page working to post 
router.post('/login', loginUser);

export default router;
