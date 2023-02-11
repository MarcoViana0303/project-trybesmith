import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/Orders';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<IOrders[]> {
    const result = await this.connection.execute(`SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
     FROM Trybesmith.orders AS o
     JOIN Trybesmith.products AS p ON p.order_id = o.id
     GROUP BY o.id ORDER BY o.id`);
    const [rows] = result;
    return rows as IOrders[];
  }
}