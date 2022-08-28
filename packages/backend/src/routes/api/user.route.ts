import { Router } from 'express';

import { joiUserLoginSchema } from '../../helpers/joiValidation/JoiUserLoginSchema';
import { joiUserRegisterSchema } from '../../helpers/joiValidation/JoiUserRegisterSchema';
import userContoller from '../../controllers/auth.controller';
import validation from '../../middlewares/validation';
import ctrlWrapper from '../../middlewares/ctrlWrapper';

const userRouter: Router = Router();

userRouter.post(
  '/login',
  validation(joiUserLoginSchema),
  ctrlWrapper(userContoller.login.bind(userContoller))
);

userRouter.post(
  '/register',
  validation(joiUserRegisterSchema),
  ctrlWrapper(userContoller.register.bind(userContoller))
);
export default userRouter;
