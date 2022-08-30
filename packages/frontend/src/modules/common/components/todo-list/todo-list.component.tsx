import React from 'react';
import { ITodo } from '../../types/todo.types';
import { TodoItem } from '../todo-item/todo-item.component';
import { StyledTodoList } from './todo-list.styled';

export const TodoList = ({ data }: { data: ITodo[] }) => (
  <StyledTodoList>
    {data.map((todo: ITodo) => (
      <TodoItem todo={todo} key={todo._id} />
    ))}
  </StyledTodoList>
);
