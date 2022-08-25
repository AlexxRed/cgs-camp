import { Response, Request, NextFunction } from 'express';

const ctrlWrapper =
  (ctrl: (req: Request<any>, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await ctrl(req, res, next);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

export default ctrlWrapper;
