import { Router } from 'express';
const router = Router();

import { authUser } from '../controllers/userController.js';

router.post('/login', authUser);

export default router;
