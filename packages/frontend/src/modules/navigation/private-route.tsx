import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';

interface RoutesPropsType {
  children?: ReactElement;
}

const PrivateRoute = ({ children }: RoutesPropsType) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('user')!);

  return isLoggedIn ? children : <Redirect to={ROUTER_KEYS.LOGIN} />;
};

export default PrivateRoute;
