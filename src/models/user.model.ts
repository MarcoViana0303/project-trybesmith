import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/Users';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(username: string, vocation: string, level: number, password: string): 
  Promise<IUser> {
    const result = await this.connection.execute<ResultSetHeader>('INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', [username, vocation, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newUser = {
      id: insertId,
      username,
      vocation,
      level,
      password,
    };
    return newUser;
  }
}