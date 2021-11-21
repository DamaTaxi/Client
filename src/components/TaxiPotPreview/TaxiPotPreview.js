import React from 'react';
import * as S from './styles';
import TaxiPotSlide from './TaxiPotSlide/TaxiPotSlide';
import { Link } from 'react-router-dom';

const TaxiPotPreview = () => {
  return (
    <>
      <S.MiddleHeaderTitle>
        <h1>현재 모집 중인 택시 팟</h1>
        <span>현재 모집 중인 택시 팟입니다</span>
      </S.MiddleHeaderTitle>
      <TaxiPotSlide />
      <S.ButtonContainer>
        <Link to="/make-taxi-pot">
          <S.MakeTaxiPotButton>
            <p>+</p>
            <p>택시 팟 만들기</p>
          </S.MakeTaxiPotButton>
        </Link>
        <S.ToTaxiPotPage>
          <Link to="taxi-pot">택시팟 페이지로 이동</Link>
        </S.ToTaxiPotPage>
      </S.ButtonContainer>
    </>
  );
};

export default TaxiPotPreview;
