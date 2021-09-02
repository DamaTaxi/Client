import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const SearchKakaoMap = () => {
  return (
    <S.SearchKakaoMapWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.MainArticle>
        <S.MainSection>
          <S.SearchListWrapper></S.SearchListWrapper>
          <S.KakaoMapWrapper>
            <div id="designBox">도착지 검색</div>
            <div></div>
          </S.KakaoMapWrapper>
        </S.MainSection>
        <S.OptionWrapper>
          <p>정확한 도착지를 찾아 선택해주세요!</p>
          <input type="submit" form="taxiPotForm" value="선택" />
          <Link to="/taxi-pot">
            <button>취소</button>
          </Link>
        </S.OptionWrapper>
      </S.MainArticle>
      <S.BackgroundColor />
    </S.SearchKakaoMapWrapper>
  );
};

export default SearchKakaoMap;
