import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/Users';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(username: string, vocation: string, level: number, password: string): 
  Promise<IUser> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
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

  //   public async login(user: ILogin) {
  //     const { username, password} = user;
  //     const [result] = await this.connection.execute<RowDataPacket[] & IUser[]>('SELECT * FROM Trybesmith.users');

  //     const userExist = result.find((user: IUser) => user.username === username && user.password === password)

  //     if (!userExist) {
  //         return null;
  //     }

//     return example;
//   }
}