import { Pool, ResultSetHeader } from 'mysql2/promise'
import IProducts from '../interfaces/Products'

export default class ProductModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async create(product: IProducts): Promise<IProducts> {
        const { name, amount } = product;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO products (name, amount) VALUES (?, ?)',
            [name, amount],
        );
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...product};
    };
};