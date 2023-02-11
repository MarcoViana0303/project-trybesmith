import { Request, Response } from 'express';
import OrdersService from '../services/order.service';
import statusCodes from '../status/status.code';

export default class OrderController {
  private Service: OrdersService;

  constructor() {
    this.Service = new OrdersService();
  }

  public async getAll(_req: Request, res: Response) {
    const result = await this.Service.getAll();
    return res.status(statusCodes.OK).json(result);
  }
}
