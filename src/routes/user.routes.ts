import express from 'express';
import UserController from '../controllers/user.controller';

const userController = new UserController();
const router = express.Router();

router.post('/', (req, res) => userController.create(req, res));

export default router;