import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';
import Todo from '../models/Todo';

class IsExistValidation<T> {
  model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  isExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!this.model.findById(id)) {
        res.status(404).json({ message: `Not found id ${id}` });
      }
      next();
    } catch (error) {
      next();
    }
  };
}

const isExisMiddleware = new IsExistValidation(Todo);
export default isExisMiddleware;
