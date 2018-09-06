import express from 'express';
import * as signupController from './signup';

const router = express.Router();

router.post('/', signupController.Signup);

export default router;