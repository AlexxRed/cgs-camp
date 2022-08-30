import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const ButtonCreate = styled(Link)`
  text-align: center;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  font-size: ${FONTS.SIZES.l};
  margin: ${SPACES.m} 0;
  border: 0;
  border: 2px solid ${COLORS.secondary};
  box-shadow: 10px 10px 10px ${COLORS.black};
  border-radius: 5px;
  padding: ${SPACES.s};
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.l};
  }
  @media (max-width: 900px) {
    width: 75%;
  }
`;
