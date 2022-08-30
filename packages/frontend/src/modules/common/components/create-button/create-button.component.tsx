import React from 'react';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { ButtonCreate } from './create-button.styled';

export const CreateButton = () => (
  <ButtonCreate to={ROUTER_KEYS.CREATE_TODO}>Create new Todo</ButtonCreate>
);
