import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import SearchListMap from './SearchListMap/SearchListMap';

const SearchKakaoMap = () => {
  const location = useLocation();
  const path = location.state.path;
  const [onChagneSearchContent, setOnChagneSearchContent] = useState('');
  const [onSubmitSearchContent, setOnSubmitSearchContent] = useState('');
  const [clickPlaceData, setClickPlaceData] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  useEffect(() => {
    console.log(clickPlaceData);
  }, [clickPlaceData]);

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setOnSubmitSearchContent(onChagneSearchContent);
    setOnChagneSearchContent('');
    setCurrentItemIndex(null);
  };
  const onChangeSearch = (e) => {
    const { value } = e.target;
    setOnChagneSearchContent(value);
  };
  const onClickList = (data, index) => {
    setClickPlaceData(data);
    setCurrentItemIndex(index);
  };
  return (
    <S.SearchKakaoMapWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.MainArticle>
        <SearchListMap
          onClickList={onClickList}
          onChangeSearch={onChangeSearch}
          onSubmitEvent={onSubmitEvent}
          currentItemIndex={currentItemIndex}
          clickPlaceData={clickPlaceData}
          onSubmitSearchContent={onSubmitSearchContent}
        />
        <OptionWrapper
          contents="정확한 도착지를 찾아 선택해주세요!"
          buttonName="선택"
          cansleName="취소"
          cansleLink={path}
          successLink={path}
          clickPlaceData={clickPlaceData}
          data={clickPlaceData}
        />
        {/* contents, buttonName, cansleName, cansleLink, successLink, onClickEvent */}
      </S.MainArticle>
      <S.BackgroundColor />
    </S.SearchKakaoMapWrapper>
  );
};

export default SearchKakaoMap;
