import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import { CreateButton } from '../common/components/create-button/create-button.component';
import { TodoList } from '../common/components/todo-list/todo-list.component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import todoService from '../services/todo.service';
import { Loader } from '../common/components/loader/loader';

const MyTodosContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery('/own', () => todoService.getOwnTodos());

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.OWNTODOS);
  }, [history]);

  const handleComleted = () => {
    const queryString = 'filter?public=false&completed=true';
    history.push(queryString);
  };

  const handleNotComleted = () => {
    const queryString = 'filter?public=false&completed=false';
    history.push(queryString);
  };

  return (
    <Container>
      <CreateButton />
      <div>
        <Button type="button" onClick={handleComleted}>
          Completed Todos
        </Button>
        <Button type="button" onClick={handleNotComleted}>
          Not Coomleted
        </Button>
      </div>
      {isLoading ? <Loader /> : isError ? <h3>Error loading</h3> : <TodoList data={data!} />}
    </Container>
  );
};

export default MyTodosContainer;
