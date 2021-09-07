import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserMain from './components/UserMain/UserMain';
import TaxiPot from './components/TaxiPot/TaxiPot';


const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/user-main" exact component={UserMain} />
        <Route path="/taxi-pot" exact component={TaxiPot} /> 
      </Switch>
    </>
  );
};

export default Routing;
