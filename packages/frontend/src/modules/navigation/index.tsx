import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';
import TodoCreateContainer from '../create-todo';
import TodoUpdateContainer from '../update-todo';

export const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={APP_KEYS.ROUTER_KEYS.ROOT} component={HomePageContainer} />
      <Route path={APP_KEYS.ROUTER_KEYS.CREATE_TODO} component={TodoCreateContainer} />
      <Route exact path={APP_KEYS.ROUTER_KEYS.UPDATE_TODO} component={TodoUpdateContainer} />
      {/* <Route component={NotFoundView} /> */}
    </Switch>
  </BrowserRouter>
);
