import { Button } from '@mui/material';
import React from 'react';
import { ITodo } from '../../types/todo.types';
import { TodoItem } from '../todo-item/todo-item.component';
import { StyledTodoList, PaginationContainer } from './todo-list.styled';

export const TodoList = ({
  data,
  showPaging,
  page = 0,
  hasPrevPage = false,
  hasNextPage = false,
  onPageChange = () => {}
}: {
  data: ITodo[];
  showPaging?: boolean;
  page?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  onPageChange?: (page: number) => void;
}) => (
  <>
    <StyledTodoList>
      {data.map((todo: ITodo) => (
        <TodoItem todo={todo} key={todo._id} />
      ))}
    </StyledTodoList>

    {showPaging && (
      <PaginationContainer>
        {hasPrevPage && (
          <div className="pagination_pagePrev">
            <Button type="button" onClick={() => onPageChange(page - 1)}>
              Prev
            </Button>
          </div>
        )}

        {page + 1}

        {hasNextPage && (
          <div className="pagination_pageNext">
            <Button type="button" onClick={() => onPageChange(page + 1)}>
              Next
            </Button>
          </div>
        )}
      </PaginationContainer>
    )}
  </>
);
