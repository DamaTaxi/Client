import React from 'react';
import * as S from './style';
import headerLogoYellow from '../../assets/images/TaxiPot/header-logo-yellow.png';
import headerLineYellow from '../../assets/images/TaxiPot/header-line-yellow.png';
import TaxiPotSlider from './TaxiPotSlider/TaxiPotSlider';

const TaxiPot = () => {
  return (
    <>
      <S.Header>
        <img src={headerLogoYellow} alt="header-logo-yellow" />
        <img src={headerLineYellow} alt="header-line-yellow" />
      </S.Header>
      <S.MiddleHeaderTitle>
        <h1>현재 모집중인 택시 팟</h1>
      </S.MiddleHeaderTitle>
      <S.TaxiPotSlideContainer>
        <TaxiPotSlider></TaxiPotSlider>
      </S.TaxiPotSlideContainer>
    </>
  );
};

export default TaxiPot;
