import React from 'react';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { ButtonCreate } from './mytodo-button.sryled';

export const MyTodoButton = () => <ButtonCreate to={ROUTER_KEYS.OWN}>My Todos</ButtonCreate>;
