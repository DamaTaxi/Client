import React, { useState, useEffect } from 'react';
import * as S from './style';
import headerLogoYellow from '../../assets/images/TaxiPot/header-logo-yellow.png';
import SearchContainer from '../TaxiPotDetailView/ModifyTaixPot/searchContainer/SearchContainer';
import { useHistory, useLocation } from 'react-router';
import { requestWithAccessToken } from '../../lib/axios';

const SignUpPage = () => {
  const [inputData, setInputData] = useState('');
  const [placeData, setPlaceData] = useState({
    x: 0,
    y: 0,
    address: '',
  });

  const history = useHistory();
  const location = useLocation();
  const data = location.state;

  console.log(data);

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

  const onSubmitEvent = () => {
    const { x, y, address_name } = data.data;
    let blankCheckData = { x, y, address_name, inputData };
    const checkData = Object.values(blankCheckData);
    if (blankCheck(checkData)) return;
    requestWithAccessToken('patch', `/mypage`, {}, { tel: inputData, latitude: x, longitude: y, address: address_name })
      .then((res) => {
        setTimeout(() => {
          history.push('/user-main');
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOriginalInfo = () => {
    requestWithAccessToken('get', '/mypage')
      .then((res) => {
        setInputData(res.tel);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOriginalInfo();
  }, []);

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <img src={headerLogoYellow} alt="로고 이미지" />
        <h1>대마택시에 오신 것을 환영합니다.</h1>
        <S.SearchContainer>
          <p>자주가는 목적지를 검색해 주세요.</p>
          <SearchContainer id={100} path="/signup" data={data} isSignUp={true} />
          <span>주소 : {data && data.data.address_name}</span>
          <span>관련 : {data && data.data.category_name}</span>
        </S.SearchContainer>
        <S.InputWrapper>
          <p style={{ marginTop: '80px' }}>전화번호를 입력해 주세요</p>
          <input
            type="text"
            maxLength="11"
            placeholder="전화번호를 입력해 주세요"
            value={inputData}
            onChange={OnChangeEvent}
          />
        </S.InputWrapper>
        <button className="submit" onClick={onSubmitEvent}>
          시작하기
        </button>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUpPage;
