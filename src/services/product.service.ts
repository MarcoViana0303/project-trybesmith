import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProducts from '../interfaces/Products';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(name: string, amount: string): Promise<IProducts> {
    return this.model.create(name, amount);
  }
}
