import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import CreateTodoFormComponent from '../common/components/create-todo-form/create-todo-form.component';
import { Loader } from '../common/components/loader/loader';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { ITodo } from '../common/types/todo.types';
import todoService from '../services/todo.service';

const TodoUpdateleContainer = () => {
  const queryClient = useQueryClient();

  const { id }: { id: string } = useParams();

  const { data, isError, isLoading } = useQuery([QUERY_KEYS.TODOS, id], () =>
    todoService.getOneTodo(id)
  );

  const createTodoMutation = useMutation(
    (body: ITodo) => todoService.updateTodo(body._id as string, body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    }
  );

  const onSave = (values: ITodo): void => {
    createTodoMutation.mutate({
      _id: id,
      title: values.title,
      description: values.description,
      year: values.year,
      completed: values.completed,
      public: values.public
    });
    queryClient.clear();
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h3>Error loading</h3>
      ) : (
        data && <CreateTodoFormComponent data={data!} onSave={onSave} title="Edit Todo" />
      )}
    </Container>
  );
};

export default TodoUpdateleContainer;
