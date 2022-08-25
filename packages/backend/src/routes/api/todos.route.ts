import { Router } from 'express';

import { JoiTodoCreationSchema } from '../../helpers/joiValidation/JoiTodoCreationSchema';
import todoController from '../../controllers/todo.controller';
import validation from '../../middlewares/validation';
import isExisMiddleware from '../../middlewares/isExist';
import ctrlWrapper from '../../middlewares/ctrlWrapper';

const todosRouter: Router = Router();

todosRouter.get('/', ctrlWrapper(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  ctrlWrapper(todoController.findOne.bind(todoController))
);

todosRouter.post(
  '/',
  validation(JoiTodoCreationSchema),
  ctrlWrapper(todoController.createTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  validation(JoiTodoCreationSchema),
  ctrlWrapper(todoController.updateOneTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  ctrlWrapper(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
