import Todo from '../models/Todo';
import { ITodo } from '../types/todos.type';

// interface ITodo {
//   data: string;
//   title: string;
//   description?: string;
//   public: boolean;
//   complited: boolean;
//   date: Date;
// }

export default class TodoService {
  async findAll() {
    const todos = await Todo.find();
    return todos;
  }

  async findOwnerTodo<T>(owner: T) {
    const todos = await Todo.find(owner);
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
