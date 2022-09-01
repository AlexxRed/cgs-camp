import { IAppRequest } from '../types/common.type';
import TodoService from '../services/todo.service';
import { IUser } from '../types/user.type';
import { ITodoFilter } from '../types/search.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  public async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  public async getByOwnerTodo(req: IAppRequest) {
    const { _id: owner } = req.user as IUser;
    const todos = await this.todoService.findOwnerTodo({ owner });
    return todos;
  }

  public async getFilterTodos(req: IAppRequest) {
    const { _id: owner } = req.user as IUser;
    const params: ITodoFilter<string> = req.query;
    const filter: ITodoFilter<boolean> = {
      completed: params.completed === 'true',
      public: params.public === 'true'
    };
    const todos = await this.todoService.findTodos(owner, filter);
    return todos;
  }

  public async createTodo(req: IAppRequest) {
    const { _id: owner } = req.user as IUser;
    const todo = req.body;
    const createdTodo = await this.todoService.create({ ...todo, owner });
    return createdTodo;
  }

  public async findOne(req: IAppRequest) {
    const { id } = req.params;
    const todos = await this.todoService.findOne(id);
    return todos;
  }

  public async updateOneTodo(req: IAppRequest) {
    const { id } = req.params;
    const todo = req.body;
    await this.todoService.update(id, todo);
  }

  public async deleteTodo(req: IAppRequest) {
    const { id } = req.params;
    await this.todoService.delete(id);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
