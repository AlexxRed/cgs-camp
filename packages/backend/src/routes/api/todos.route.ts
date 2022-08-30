import { Router } from 'express';

import { JoiTodoCreationSchema } from '../../helpers/joiValidation/JoiTodoCreationSchema';
import todoController from '../../controllers/todo.controller';
import validation from '../../middlewares/validation';
import isExisMiddleware from '../../middlewares/isExist';
import ctrlWrapper from '../../middlewares/ctrlWrapper';
import authenticate from '../../middlewares/authentificate';

const todosRouter: Router = Router();

todosRouter.get('/', authenticate, ctrlWrapper(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
  '/own/:id',
  authenticate,
  ctrlWrapper(todoController.getByOwnerTodo.bind(todoController))
);
todosRouter.get(
  '/:id',
  authenticate,
  isExisMiddleware.isExist.bind(isExisMiddleware),
  ctrlWrapper(todoController.findOne.bind(todoController))
);

todosRouter.post(
  '/',
  authenticate,
  validation(JoiTodoCreationSchema),
  ctrlWrapper(todoController.createTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  authenticate,
  isExisMiddleware.isExist.bind(isExisMiddleware),
  validation(JoiTodoCreationSchema),
  ctrlWrapper(todoController.updateOneTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  authenticate,
  isExisMiddleware.isExist.bind(isExisMiddleware),
  ctrlWrapper(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
