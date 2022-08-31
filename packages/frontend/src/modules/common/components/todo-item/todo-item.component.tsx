import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ITodo } from '../../types/todo.types';
import { ItemContainer, ItemHeader, ItemInfo, ButtonBox } from './todo-item.styled';
import DeleteButton from '../delete-button/delete-button.component';
import EditButton from '../edit-button/edit-button.component';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import todoService from '../../../services/todo.service';

export const TodoItem = ({ todo }: { todo: ITodo }) => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(todoService.deleteTodo.bind(todoService), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    }
  });

  return (
    <ItemContainer>
      <ItemHeader>
        {`${todo.title} ${todo.year}`}
        <ButtonBox>
          <Link to={`/${todo._id}`}>
            <EditButton todo={todo} />
          </Link>
          <DeleteButton onClick={() => deleteTodoMutation.mutate(todo._id!)} />
        </ButtonBox>
      </ItemHeader>
      <ItemInfo>{todo.description}</ItemInfo>
      <ItemInfo>{todo.completed ? 'Completed, ' : 'Not completed, '}</ItemInfo>
      <ItemInfo>{todo.public ? 'Public' : 'Private'}</ItemInfo>
    </ItemContainer>
  );
};
