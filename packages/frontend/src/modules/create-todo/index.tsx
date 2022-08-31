import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CreateTodoFormComponent from '../common/components/create-todo-form/create-todo-form.component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import todoService from '../services/todo.service';
import { ITodo } from '../common/types/todo.types';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

const TodoCreateContainer = () => {
  const queryClient = useQueryClient();

  const createTodoMutation = useMutation(todoService.createTodo.bind(todoService), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    }
  });

  const data = {
    title: '',
    description: '',
    year: 2022,
    completed: false,
    public: false
  };
  const onSave = (values: ITodo): void => {
    createTodoMutation.mutate(values);
  };

  return (
    <Container>
      <CreateTodoFormComponent data={data} onSave={onSave} title="Create new Todo" />
    </Container>
  );
};

export default TodoCreateContainer;
