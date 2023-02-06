import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();
const router = express.Router();

router.post('/products', (req, res) => productController.create(req, res));

export default router;