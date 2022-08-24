import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  public async getAllTodo(_req: Request, res: Response) {
    const todos = await this.todoService.findAll();
    res.json(todos);
  }

  public async createTodo(req: Request<{}, ITodo>, res: Response) {
    const todo = req.body;
    const createdTodo = await this.todoService.create(todo);
    res.json(createdTodo);
  }

  public async findOne(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const todos = await this.todoService.findOne(id);
    res.json(todos);
  }

  public async updateOneTodo(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const todo = req.body;
    await this.todoService.update(id, todo);
    res.json();
  }

  public async deleteTodo(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    await this.todoService.delete(id);
    res.json();
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
