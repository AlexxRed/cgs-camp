import { Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

interface IUser {
  _id?: number;
  email?: string;
  username?: string;
  password?: string;
}

export class TodoController {
  constructor(private todoService: TodoService) {}

  public async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  public async getByOwnerTodo(req: Request<IUser, ITodo> | any) {
    const { _id: owner } = req.user;
    const todos = await this.todoService.findOwnerTodo({ owner });
    return todos;
  }

  public async createTodo(req: Request<IUser, ITodo> | any) {
    const { _id: owner } = req.user;
    const todo = req.body;
    const createdTodo = await this.todoService.create({ ...todo, owner });
    return createdTodo;
  }

  public async findOne(req: Request<{ id: string }>) {
    const { id } = req.params;
    const todos = await this.todoService.findOne(id);
    return todos;
  }

  public async updateOneTodo(req: Request<{ id: string }>) {
    const { id } = req.params;
    const todo = req.body;
    await this.todoService.update(id, todo);
  }

  public async deleteTodo(req: Request<{ id: string }>) {
    const { id } = req.params;
    await this.todoService.delete(id);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
