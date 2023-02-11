import UserModel from '../models/user.model';
import connection from '../models/connection';
import JWTconfig from '../utils/JWT';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(username: string, vocation: string, level: number, password: string): 
  Promise<string> {
    await this.model.create(username, vocation, level, password);
    const token = JWTconfig.generateToken({ username, vocation, level });
    return token;
  }
}
