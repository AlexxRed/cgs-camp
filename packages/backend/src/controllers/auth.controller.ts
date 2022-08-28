import { Request } from 'express';
import { IUser } from '../types/user.type';
import UserService from '../services/user.service';

class UserContoller {
  constructor(private userService: UserService) {}

  public async register(req: Request<{}, {}, IUser>) {
    const user = await this.userService.register(req.body);
    return user;
  }

  public async login(req: Request<{}, {}, IUser>) {
    const user = await this.userService.login(req.body);
    return user;
  }
}

const userContoller = new UserContoller(new UserService());
export default userContoller;
