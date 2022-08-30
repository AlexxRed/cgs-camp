import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const ItemHeader = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SPACES.m};
`;

export const ItemInfo = styled('div')`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SPACES.m};
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.m};
  }
`;

export const ItemContainer = styled('li')`
  font-size: ${FONTS.SIZES.l};
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.black};
  border: 2px solid ${COLORS.secondary};
  border-radius: 5px;
  padding: ${SPACES.m};
  margin: ${SPACES.l};
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.l};
    margin: ${SPACES.s};
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  justify-content: flex-end;
`;
