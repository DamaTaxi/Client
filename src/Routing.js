import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaxiPot from './components/TaxiPot/TaxiPot';
import MyTaxiPot from './components/TaxiPotDetailView/MyTaxiPot/MyTaxiPot';
import ModifyTaxiPot from './components/TaxiPotDetailView/ModifyTaixPot/ModifyTaxiPot';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/taxi-pot" exact component={TaxiPot} /> 
        <Route path="/my-taxi-pot" exact component={MyTaxiPot} /> 
        <Route path="/modify-my-taxi-pot" exact component={ModifyTaxiPot} /> 
      </Switch>
    </>
  );
};

export default Routing;
