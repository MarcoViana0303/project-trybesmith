import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export class ProductController {
  public productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;

    const result = await this.productService.create(name, amount);

    res.status(201).json(result);
  }
}