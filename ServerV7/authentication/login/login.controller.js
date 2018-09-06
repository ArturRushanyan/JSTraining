import express from 'express';
import * as loginController from './login';

const router = express.Router();

router.post('/', loginController.Login);

export default router;