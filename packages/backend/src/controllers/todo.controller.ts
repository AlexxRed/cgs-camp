import { IAppRequest } from '../types/common.type';
import TodoService from '../services/todo.service';
import { IUser } from '../types/user.type';
import { ITodoFilter } from '../types/search.type';
import { ITodo } from '../types/todos.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  public async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  public async getByOwnerTodo(req: IAppRequest) {
    const { _id: owner } = req.user as IUser;
    const params = { ...req.query, owner } as ITodoFilter<string>;
    const todos = await this.getFilteredTodos(params);
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

  private async getFilteredTodos(params: ITodoFilter<string>): Promise<ITodo[]> {
    const filter: ITodoFilter<boolean> = {};
    if (typeof params.completed !== 'undefined') {
      filter.completed = params.completed === 'true';
    }
    if (typeof params.public !== 'undefined') {
      filter.public = params.public === 'true';
    }
    if (typeof params.owner !== 'undefined') {
      filter.owner = params.owner;
    }
    const todos = await this.todoService.findTodos(filter);
    return todos;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
