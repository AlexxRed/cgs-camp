import { Response, Request, NextFunction } from 'express';

import jwt, { JwtPayload } from 'jsonwebtoken';

import User from '../models/User';

import createError from '../helpers/createError';

const { JWT_SECRET } = process.env;

const authenticate = async (req: Request | any, res: Response, next: NextFunction) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      throw createError(401);
    }
    try {
      const { id }: JwtPayload | any = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(id);
      if (!user) {
        throw createError(401);
      }
      req.user = user;

      next();
    } catch (error) {
      throw createError(401);
    }
  } catch (error) {
    next(error);
  }
};

export default authenticate;
