import React from 'react';
import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';
import { PrivateRoute } from '../containers'
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route component={LoginRoute} path="/" exact />
        <Route component={AuthorizeRoute} path="/authorize" />
        <PrivateRoute comp={DashboardRoute} path="/dashboard" />
      </Switch>
    </>
  );
};

export default Routes;
