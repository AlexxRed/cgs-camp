import { Schema, model } from 'mongoose';
import { IUser } from '../types/user.type';

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    email: {
      type: String,
      unique: true
    }
  },
  { versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

export default User;
