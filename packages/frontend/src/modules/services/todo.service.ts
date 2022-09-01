import { ITodo } from '../common/types/todo.types';
import HttpService from './http.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

class TodoService {
  private httpService: HttpService<ITodo>;

  constructor(httpService: HttpService<ITodo>) {
    this.httpService = httpService;
  }

  getAllTodos = async () => this.httpService.getAll();

  getOwnTodos = async () => this.httpService.getOwn();

  getOneTodo = async (id: string) => this.httpService.getOne(id);

  createTodo = async (body: ITodo) => this.httpService.create(body);

  updateTodo = async (id: string, body: ITodo) => this.httpService.update(id, body);

  deleteTodo = async (id: string) => this.httpService.delete(id);
}
const todoService = new TodoService(new HttpService<ITodo>(QUERY_KEYS.TODOS));
export default todoService;
