import { Response, NextFunction } from 'express';

import jwt, { JwtPayload } from 'jsonwebtoken';

import User from '../models/User';

import createError from '../helpers/createError';
import { IAppRequest } from '../types/common.type';

const { JWT_SECRET } = process.env;

const authenticate = async (req: IAppRequest, res: Response, next: NextFunction) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      throw createError(401);
    }
    try {
      const verifyResult: JwtPayload | string = jwt.verify(token, JWT_SECRET);
      if (typeof verifyResult !== 'object') {
        throw createError(401);
      }
      const { id } = verifyResult;
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
