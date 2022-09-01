import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';
import TodoCreateContainer from '../create-todo';
import TodoUpdateContainer from '../update-todo';
import RegisterContainer from '../register';
import LoginContainer from '../login';
import MyTodosContainer from '../mytodos';

export const MainRouter = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('user')!);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_KEYS.ROUTER_KEYS.ROOT}>
          {isLoggedIn ? (
            <Route exact path={APP_KEYS.ROUTER_KEYS.ROOT} component={HomePageContainer} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.ROOT} component={LoginContainer} />
          )}
        </Route>
        <Route exact path={APP_KEYS.ROUTER_KEYS.OWN}>
          {isLoggedIn ? (
            <Route exact path={APP_KEYS.ROUTER_KEYS.OWN} component={MyTodosContainer} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.ROOT} component={LoginContainer} />
          )}
        </Route>
        <Route exact path={APP_KEYS.ROUTER_KEYS.CREATE_TODO}>
          {isLoggedIn ? (
            <Route path={APP_KEYS.ROUTER_KEYS.CREATE_TODO} component={TodoCreateContainer} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.ROOT} component={LoginContainer} />
          )}
        </Route>
        <Route exact path={APP_KEYS.ROUTER_KEYS.UPDATE_TODO}>
          {isLoggedIn ? (
            <Route path={APP_KEYS.ROUTER_KEYS.UPDATE_TODO} component={TodoUpdateContainer} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.ROOT} component={LoginContainer} />
          )}
        </Route>
        <Route exact path={APP_KEYS.ROUTER_KEYS.REGISTER}>
          {isLoggedIn ? (
            <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.REGISTER} component={RegisterContainer} />
          )}
        </Route>
        <Route exact path={APP_KEYS.ROUTER_KEYS.LOGIN}>
          {isLoggedIn ? (
            <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />
          ) : (
            <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} component={LoginContainer} />
          )}
        </Route>
        {/* <Route path={APP_KEYS.ROUTER_KEYS.REGISTER} component={RegisterContainer} /> */}
        {/* <Route path={APP_KEYS.ROUTER_KEYS.OWN} component={MyTodosContainer} /> */}
        {/* <Route exact path={APP_KEYS.ROUTER_KEYS.ROOT} component={HomePageContainer} />
        <Route path={APP_KEYS.ROUTER_KEYS.CREATE_TODO} component={TodoCreateContainer} />
        <Route exact path={APP_KEYS.ROUTER_KEYS.UPDATE_TODO} component={TodoUpdateContainer} /> */}
        {/* <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} component={LoginContainer} /> */}
        {/* <Route component={NotFoundView} /> */}
      </Switch>
    </BrowserRouter>
  );
};
