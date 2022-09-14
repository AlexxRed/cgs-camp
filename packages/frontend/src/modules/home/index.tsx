import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import { CreateButton } from '../common/components/create-button/create-button.component';
import { TodoList } from '../common/components/todo-list/todo-list.component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import todoService from '../services/todo.service';
import { Loader } from '../common/components/loader/loader';

const pageSize = 2;

const HomePageContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const { data, isError, isLoading } = useQuery([QUERY_KEYS.TODOS, page], () =>
    todoService.getAllTodos({ page, pageSize })
  );

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.TODOS, page]);
  }, [history]);

  const handleClick = () => {
    history.push(ROUTER_KEYS.OWN);
  };

  const hasPrevPage = useMemo(() => page > 0, [page]);
  const hasNextPage = useMemo(() => !!data && data.length === pageSize, [data]);

  return (
    <Container>
      <CreateButton />
      <Button onClick={handleClick}>My Todos</Button>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h3>Error loading</h3>
      ) : (
        <TodoList
          page={page}
          showPaging
          onPageChange={setPage}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
          data={data!}
        />
      )}
    </Container>
  );
};

export default HomePageContainer;
