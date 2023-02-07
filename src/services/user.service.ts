import UserModel from '../models/user.model';
import connection from '../models/connection';
import IUser from '../interfaces/Users';
import JWTconfig from '../utils/JWT';

export default class UserService {
  public jwt: JWTconfig;

  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
    this.jwt = new JWTconfig();
  }

  public async create(username: string, vocation: string, level: number, password: string): Promise<IUser> {
    await this.model.create(username, vocation, level, password);
    const token = JWTconfig.generateToken({ username, vocation, level });
    return token;
  }
}
