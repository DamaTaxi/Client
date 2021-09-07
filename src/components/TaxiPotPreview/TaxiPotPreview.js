import React from 'react';
import * as S from './styles';
import TaxiPotSlide from './TaxiPotSlide/TaxiPotSlide';

const TaxiPotPreview = () => {
  return (
    <>
      <S.MiddleHeaderTitle>
        <h1>현재 모집 중인 택시 팟</h1>
        <span>현재 모집 중인 택시 팟입니다</span>
      </S.MiddleHeaderTitle>
      <TaxiPotSlide />
      <S.ButtonContainer>
        <S.MakeTaxiPotButton>
          <p>+</p>
          <p>택시 팟 만들기</p>
        </S.MakeTaxiPotButton>
        <S.ToTaxiPotPage>택시팟 페이지로 이동</S.ToTaxiPotPage>
      </S.ButtonContainer>
    </>
  );
};

export default TaxiPotPreview;
