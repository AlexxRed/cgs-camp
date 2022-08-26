import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { CreateButton } from '../common/components/create-button/create-button.component';
import { TodoList } from '../common/components/todo-list/todo-list.component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import HttpService from '../services/http.service';
import { Loader } from '../common/components/loader/loader';

// const td = [
//   {
//     _id: '6304948e401ea2bf0f23d5d9',
//     title: 'hello',
//     description: 'hello todo',
//     year: 2022,
//     completed: true,
//     public: false,
//     createdAt: '2022-08-23T08:49:18.872Z',
//     updatedAt: '2022-08-23T08:49:18.872Z'
//   }
// ];

const HomePageContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery(QUERY_KEYS.TODOS, () => HttpService.getAll());

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.TODOS);
  }, [history]);

  return (
    <Container>
      <CreateButton />
      {isLoading ? <Loader /> : isError ? <h3>Error loading</h3> : <TodoList data={data} />}
    </Container>
  );
};

export default HomePageContainer;
