import { Router } from 'express';

import { JoiTodoCreationSchema } from '../../helpers/joiValidation/JoiTodoCreationSchema';
import todoController from '../../controllers/todo.controller';
import validation from '../../middlewares/validation';
import isExisMiddleware from '../../middlewares/isExist';

const todosRouter: Router = Router();

todosRouter.get('/', todoController.getAllTodo.bind(todoController));
todosRouter.get(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  todoController.findOne.bind(todoController)
);

todosRouter.post(
  '/',
  validation(JoiTodoCreationSchema),
  todoController.createTodo.bind(todoController)
);

todosRouter.put(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  validation(JoiTodoCreationSchema),
  todoController.updateOneTodo.bind(todoController)
);

todosRouter.delete(
  '/:id',
  isExisMiddleware.isExist.bind(isExisMiddleware),
  todoController.deleteTodo.bind(todoController)
);

export default todosRouter;
