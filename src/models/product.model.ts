import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/Products';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as IProducts[];
  }

  public async create(name: string, amount: string): Promise<IProducts> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newProduct = {
      id: insertId, 
      name, 
      amount,
    };
    return newProduct;
  }
}