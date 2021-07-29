import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaxiPot from './components/TaxiPot/TaxiPot';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/taxi-pot" exact component={TaxiPot} /> 
      </Switch>
    </>
  );
};

export default Routing;
