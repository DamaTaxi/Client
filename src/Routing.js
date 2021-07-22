import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminMain from './components/AdminMain/AdminMain';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/admin-main" exact component={AdminMain} />
      </Switch>
    </>
  );
};

export default Routing;
