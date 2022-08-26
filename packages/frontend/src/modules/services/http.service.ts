import axios from 'axios';
import { ITodo } from '../common/types/todo.types';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

interface IHttp {
  baseUrl: string;
  url: string;
  apiVersion: string;
}

class TodoHttpSerivce implements IHttp {
  constructor(url: string, baseUrl = 'http://localhost:4200', apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.url = url;
  }

  baseUrl: string;

  url: string;

  apiVersion: string;

  getUrl() {
    return `${this.baseUrl}/${this.apiVersion}/${this.url}`;
  }

  getUrlId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  async getAll(): Promise<ITodo[]> {
    const { data } = await axios.get(this.getUrl());
    return data;
  }

  async getOne(id: string): Promise<ITodo> {
    const { data } = await axios.get(this.getUrlId(id));
    return data;
  }

  async create(todo: ITodo): Promise<ITodo> {
    const { data } = await axios.post(this.getUrl(), todo);
    return data;
  }

  async update({ id, todo }: UpdateArgs): Promise<ITodo> {
    const { data } = await axios.put(this.getUrlId(id), todo);
    return data;
  }

  async delete(id: string): Promise<void> {
    await axios.delete(this.getUrlId(id));
  }
}

interface UpdateArgs {
  id: string;
  todo: ITodo;
}

const HttpService = new TodoHttpSerivce(QUERY_KEYS.TODOS);

export default HttpService;
