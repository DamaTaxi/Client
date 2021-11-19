import React, { useState } from 'react';
import * as S from './style';
import headerLogoYellow from '../../assets/images/TaxiPot/header-logo-yellow.png';
import SearchContainer from '../TaxiPotDetailView/ModifyTaixPot/searchContainer/SearchContainer';
import { useLocation } from 'react-router';

const SignUpPage = () => {
  const [inputData, setInputData] = useState('');

  const location = useLocation();
  const data = location.state;

  const blankCheck = (values) => {
    return values.some((ele) => {
      if (ele === '') {
        alert('빈칸이 있는 지 확인해주세요.');
      }
      return ele === '';
    });
  };

  const OnChangeEvent = (e) => {
    setInputData(e.target.value);
  };

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <img src={headerLogoYellow} alt="로고 이미지" />
        <h1>대마택시에 오신 것을 환영합니다.</h1>
        <S.InputWrapper>
          <p style={{ marginTop: '80px' }}>전화번호를 입력해 주세요</p>
          <input type="text" placeholder="전화번호를 입력해 주세요" onChange={OnChangeEvent} />
        </S.InputWrapper>
        <S.SearchContainer>
          <p>자주가는 목적지를 검색해 주세요.</p>
          <SearchContainer id={100} path="/sign-up" data={data} isSignUp={true} />
          <span>주소 : {data && data.data.address_name}</span>
          <span>관련 : {data && data.data.category_name}</span>
        </S.SearchContainer>
        <button className="submit">시작하기</button>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUpPage;
