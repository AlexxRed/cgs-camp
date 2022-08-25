import { Schema, model } from 'mongoose';
import { ITodo } from '../types/todos.type';

// export interface ITodo {
//   title: string;
//   description?: string;
//   completed: boolean;
//   public: boolean;
//   year: number;
// }

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    public: {
      type: Boolean,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  { versionKey: false, timestamps: true }
);

const Todo = model('todo', todoSchema);

export default Todo;
