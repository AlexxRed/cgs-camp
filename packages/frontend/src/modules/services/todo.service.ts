import { ITodo } from '../common/types/todo.types';
import HttpService from './http.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

class TodoService {
  private httpService: HttpService<ITodo>;

  constructor(httpService: HttpService<ITodo>) {
    this.httpService = httpService;
  }

  getAllTodos = async (filter?: { page: number; pageSize: number }) =>
    this.httpService.getAll(filter);

  getOwnTodos = async (filter?: { completed: boolean }) => this.httpService.getOwn(filter);

  getOneTodo = async (id: string) => this.httpService.getOne(id);

  createTodo = async (body: ITodo) => this.httpService.create(body);

  updateTodo = async (id: string, body: ITodo) => this.httpService.update(id, body);

  deleteTodo = async (id: string) => this.httpService.delete(id);
}
const todoService = new TodoService(new HttpService<ITodo>(QUERY_KEYS.TODOS));
export default todoService;
