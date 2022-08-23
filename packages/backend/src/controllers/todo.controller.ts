import { Response, Request, NextFunction } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  public async getAllTodo(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await this.todoService.findAll();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  public async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = req.body;
      const createdTodo = await this.todoService.create(todo);
      res.json(createdTodo);
    } catch (error) {
      next(error);
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const todos = await this.todoService.findOne(id);
      res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  public async updateOneTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const todo = req.body;
      await this.todoService.update(id, todo);
      res.json();
    } catch (error) {
      next(error);
    }
  }

  public async deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.todoService.delete(id);
      res.json();
    } catch (error) {
      next(error);
    }
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
