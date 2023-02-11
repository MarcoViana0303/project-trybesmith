import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;

    const result = await this.productService.create(name, amount);

    res.status(201).json(result);
  }
}