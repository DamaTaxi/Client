import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import SearchListMap from './SearchListMap/SearchListMap';

const SearchKakaoMap = () => {
  return (
    <S.SearchKakaoMapWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.MainArticle>
        <SearchListMap/>
        <OptionWrapper contents="정확한 도착지를 찾아 선택해주세요!" buttonName="선택" cansleName="취소" link="#" />
      </S.MainArticle>
      <S.BackgroundColor />
    </S.SearchKakaoMapWrapper>
  );
};

export default SearchKakaoMap;
