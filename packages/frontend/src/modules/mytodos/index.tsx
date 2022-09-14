import React, { useEffect, useState } from 'react';
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
  const [filterCompleted, setFilterCompleted] = useState<boolean | null>(null);

  const history = useHistory();
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery(['/own', filterCompleted], () => {
    const filter = filterCompleted === null ? undefined : { completed: filterCompleted };
    return todoService.getOwnTodos(filter);
  });

  useEffect(() => {
    queryClient.invalidateQueries(QUERY_KEYS.OWNTODOS);
  }, [history]);

  const handleComleted = () => {
    setFilterCompleted(true);
  };

  const handleNotComleted = () => {
    setFilterCompleted(false);
  };
  const handleAll = () => {
    setFilterCompleted(null);
  };

  return (
    <Container>
      <CreateButton />
      <div>
        <Button type="button" onClick={handleComleted}>
          Completed Todos
        </Button>
        <Button type="button" onClick={handleNotComleted}>
          Not Copmleted
        </Button>
        <Button type="button" onClick={handleAll}>
          All
        </Button>
      </div>
      {isLoading ? <Loader /> : isError ? <h3>Error loading</h3> : <TodoList data={data!} />}
    </Container>
  );
};

export default MyTodosContainer;
