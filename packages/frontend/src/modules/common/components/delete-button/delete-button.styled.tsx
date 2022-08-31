import styled from 'styled-components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const ButtonDelete = styled.button`
  cursor: pointer;
  margin-left: ${SPACES.m};
  border-radius: 3px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-weight: ${FONTS.WEIGHTS};
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
`;

export const ButtonIcon = styled(DeleteForeverIcon)`
  height: 100%;
`;
