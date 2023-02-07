import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { username, vocation, level, password } = req.body;
    
    const token = await this.userService.create(username, vocation, level, password);
    
    res.status(201).json({ token });
  }
}
