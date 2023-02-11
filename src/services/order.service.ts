import IOrders from '../interfaces/Orders';
import connection from '../models/connection';
import OrdersModel from '../models/order.model';

export default class OrderService {
  public Model: OrdersModel;

  constructor() {
    this.Model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.Model.getAll();

    return result;
  }
}
