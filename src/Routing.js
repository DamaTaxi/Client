import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaxiPot from './components/TaxiPot/TaxiPot';
import MyTaxiPot from './components/TaxiPotDetailView/MyTaxiPot/MyTaxiPot';
import ModifyTaxiPot from './components/TaxiPotDetailView/ModifyTaixPot/ModifyTaxiPot';
import MakeTaxiPot from './components/TaxiPotDetailView/MakeTaxiPot/MakeTaxiPot';
import SearchKakaoMap from './components/TaxiPotDetailView/SearchKakaoMap/SearchKakaoMap';
import UserTaxiPot from './components/TaxiPotDetailView/UserTaxiPot/UserTaxiPot';
import AdminMain from './components/AdminMain/AdminMain';
import UserMain from './components/UserMain/UserMain';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/taxi-pot" exact component={TaxiPot} />
        <Route path="/my-taxi-pot" exact component={MyTaxiPot} />
        <Route path="/modify-my-taxi-pot" exact component={ModifyTaxiPot} />
        <Route path="/make-taxi-pot" exact component={MakeTaxiPot} />
        <Route path="/search-kakao:id" exact component={SearchKakaoMap} />
        <Route path="/user-taxi-pot:id" exact component={UserTaxiPot} />
        <Route path="/admin-main" exact component={AdminMain} />
        <Route path="/user-main" exact component={UserMain} />
      </Switch>
    </>
  );
};

export default Routing;
