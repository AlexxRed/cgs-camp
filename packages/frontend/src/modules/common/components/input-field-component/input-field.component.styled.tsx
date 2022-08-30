import styled from 'styled-components';
import { Field } from 'formik';
import { COLORS, SPACES } from '../../../theme';

export const Box = styled.div`
  display: block;
`;

export const LableForm = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled(Field)`
  display: flex;
  box-sizing: content-box;
  outline: none;
  padding: ${SPACES.m};
  flex-direction: column;
  margin-bottom: ${SPACES.m};
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
`;

export const Text = styled.p`
  display: block;
  width: 100%;
  text-decoration: none;
`;
