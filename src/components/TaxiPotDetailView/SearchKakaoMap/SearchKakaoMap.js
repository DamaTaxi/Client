import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';

const SearchKakaoMap = () => {
  const [searchContent, setSearchContent] = useState('');
  const onSubmitEvent = (e) => {
    e.preventDefault();
    alert(searchContent);
  };
  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearchContent(value);
  };

  return (
    <S.SearchKakaoMapWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.MainArticle>
        <S.MainSection>
          <S.SearchListWrapper>
            <SearchForm onSubmitEvent={onSubmitEvent} onChangeSearch={onChangeSearch}></SearchForm>
          </S.SearchListWrapper>
          <S.KakaoMapWrapper>
            <div id="designBox">도착지 검색</div>
            <div></div>
          </S.KakaoMapWrapper>
        </S.MainSection>
        <OptionWrapper contents="정확한 도착지를 찾아 선택해주세요!" buttonName="선택" cansleName="취소" link="#" />
      </S.MainArticle>
      <S.BackgroundColor />
    </S.SearchKakaoMapWrapper>
  );
};

export default SearchKakaoMap;
