import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import { CreateButton } from '../common/components/create-button/create-button.component';
import { TodoList } from '../common/components/todo-list/todo-list.component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
// import HttpService from '../services/http.service';
import todoService from '../services/todo.service';
import { Loader } from '../common/components/loader/loader';

const HomePageContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery(QUERY_KEYS.TODOS, () => todoService.getAllTodos());

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.TODOS);
  }, [history]);

  const handleClick = () => {
    history.push(ROUTER_KEYS.OWN);
  };

  return (
    <Container>
      <CreateButton />
      <Button onClick={handleClick}>My Todos</Button>
      {isLoading ? <Loader /> : isError ? <h3>Error loading</h3> : <TodoList data={data!} />}
    </Container>
  );
};

export default HomePageContainer;
