import { QueryOptions } from 'mongoose';
import Todo from '../models/Todo';
import { ITodo } from '../types/todos.type';
import { ITodoFilter } from '../types/search.type';

export default class TodoService {
  async findAll() {
    const todos = await Todo.find({ public: true });
    return todos;
  }

  // async findAll() {
  //   const limit = 10;
  //   const page = 1;
  //   const skip = (page - 1) * limit;
  //   const todos = await Todo.find({ public: true }, { skip, limit: Number(limit) });
  //   return todos;
  // }

  async findOwnerTodo<T>(owner: T) {
    const todos = await Todo.find(owner);
    return todos;
  }

  async findTodos(
    filter: ITodoFilter<boolean, number>,
    paging?: { page: number; pageSize: number }
  ) {
    const options: QueryOptions = {};
    if (paging) {
      options.skip = paging.page * paging.pageSize;
      options.limit = paging.pageSize;
    }
    const todos = await Todo.find(filter, null, options);
    return todos;
  }

  async findOne(id: string) {
    const todo = await Todo.findById(id);
    return todo;
  }

  async create(data: ITodo) {
    const todo = await Todo.create(data);
    return todo;
  }

  async update(id: string, data: ITodo) {
    const todo = await Todo.findByIdAndUpdate(id, data);
    return todo;
  }

  async delete(id: string) {
    await Todo.findByIdAndDelete(id);
  }
}
