import Todo from '../models/Todo';

interface ITodo {
  data: string;
  title: string;
  description?: string;
  public: boolean;
  complited: boolean;
  date: Date;
}

export default class TodoService {
  async findAll() {
    try {
      const todos = await Todo.find();
      return todos;
    } catch {
      return null;
    }
  }

  async findOne(id: string) {
    try {
      const todo = await Todo.findById(id);
      return todo;
    } catch {
      return null;
    }
  }

  async create(data: ITodo) {
    try {
      const todo = await Todo.create(data);
      return todo;
    } catch {
      return null;
    }
  }

  async update(id: string, data: ITodo) {
    try {
      const todo = await Todo.findByIdAndUpdate(id, data);
      return todo;
    } catch {
      return null;
    }
  }

  async delete(id: string) {
    try {
      await Todo.findByIdAndDelete(id);
      return 'Success';
    } catch {
      return 'Not Found';
    }
  }
}
