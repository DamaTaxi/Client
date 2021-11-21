import React from 'react';
import * as S from './style';
import headerLogoYellow from '../../assets/images/TaxiPot/header-logo-yellow.png';
import headerLineYellow from '../../assets/images/TaxiPot/header-line-yellow.png';
import TaxiPotSlider from './TaxiPotSlider/TaxiPotSlider';
import TaxiPotList from './TaxiPotList/TaxiPotList';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const TaxiPot = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <S.TaxiPotWrapper>
      <S.Header>
        <Link to="/user-main">
          <img src={headerLogoYellow} alt="header-logo-yellow" />
        </Link>
        <img src={headerLineYellow} alt="header-line-yellow" />
      </S.Header>
      <S.MiddleHeaderTitle>
        <h1>현재 모집중인 택시 팟</h1>
      </S.MiddleHeaderTitle>
      <TaxiPotSlider></TaxiPotSlider>
      <TaxiPotList></TaxiPotList>
    </S.TaxiPotWrapper>
  );
};

export default TaxiPot;
