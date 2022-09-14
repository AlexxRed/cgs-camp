import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const StyledTodoList = styled.ul`
  width: 50%;
  display: grid;
  margin: ${SPACES.m} auto 0;
  grid-template-columns: 1fr;
  grid-gap: ${SPACES.l};
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;
