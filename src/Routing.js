import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DeveloperPage from './components/DeveloperPage/DeveloperPage';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/developer-information" exact component={DeveloperPage} />
      </Switch>
    </>
  );
};

export default Routing;
