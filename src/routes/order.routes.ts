import { Router } from 'express';
import OrderController from '../controllers/order.controller';
// instancia
const orderController = new OrderController();

const router = Router();

router.get('/', (req, res) => orderController.getAll(req, res));

export default router;