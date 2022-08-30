import { Request } from 'express';
import * as core from 'express-serve-static-core';
import { IUser } from './user.type';

export interface IAppRequest<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>
> extends Request<P, ResBody, ReqBody, ReqQuery, Locals> {
  user?: IUser;
}
