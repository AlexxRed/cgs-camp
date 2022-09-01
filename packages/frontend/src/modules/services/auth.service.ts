import { IUser } from '../common/types/user.types';
import HttpService from './http.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

class UserService {
  private httpService: HttpService<IUser>;

  constructor(httpService: HttpService<IUser>) {
    this.httpService = httpService;
  }

  registerUser = async (body: IUser) => this.httpService.register(body);

  loginUser = async (body: IUser) => this.httpService.login(body);
}
const userService = new UserService(new HttpService<IUser>(QUERY_KEYS.AUTH));
export default userService;
