import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserMain from './components/UserMain/UserMain';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/user-main" exact component={UserMain} />
      </Switch>
    </>
  );
};

export default Routing;
