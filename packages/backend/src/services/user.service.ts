import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from '../helpers/createError';
import User from '../models/User';
import { IUser } from '../types/user.type';

const { JWT_SECRET } = process.env;
const { JWT_EXPIRATION } = process.env;

class UserService {
  async login(data: IUser) {
    const { email, password, username } = data;
    const user = (await User.findOne({ email })) || (await User.findOne({ username }));
    if (!user) {
      throw createError(401, 'Email or password is wrong');
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw createError(401, 'Email or password is wrong');
    }
    const payload = {
      id: user._id
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: `${JWT_EXPIRATION}` });

    return { user, token };
  }

  async register(data: IUser) {
    const { email, password, username } = data;
    const result = (await User.findOne({ email })) || (await User.findOne({ username }));
    if (result) {
      throw createError(409, 'Email or Name in use');
    }
    const hashPassword = await bcrypt.hash(password, 15);
    const user = await User.create({
      email,
      username,
      password: hashPassword
    });

    const payload = {
      id: user._id
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: `${JWT_EXPIRATION}` });

    return { user, token };
  }
}

export default UserService;
