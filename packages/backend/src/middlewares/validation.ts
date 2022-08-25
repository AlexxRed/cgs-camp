import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validation = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: error,
      code: 400
    });
  }
  next();
};

export default validation;
