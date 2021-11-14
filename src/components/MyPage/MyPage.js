import React from 'react';
import * as S from './styles';
import Modify from '../../assets/images/modify.svg';
import CreateKakaoMap from '../../templates/CreateKakaoMap/CreateKakaoMap';

const MyPage = () => {
  return (
    <S.Wrapper>
      <S.UserName>2110 권민정</S.UserName>
      <S.NumberContainer>
        <S.Title>전화번호</S.Title>
        <S.Content>
          <div>010-2809-3338</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.NumberContainer>
      <S.EmailContainer>
        <S.Title>이메일</S.Title>
        <S.Content>
          <div>kodohyeon71@gmail.com</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.EmailContainer>
      <S.PlaceContainer>
        <S.Title>자주 가는 곳</S.Title>
        <S.Content>
          <div>대전광역시 유성구 가정북로 76</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.PlaceContainer>
      <S.TaxiPotContainer>
        <S.Title>현재 예약된 팟</S.Title>
        <S.Content>
          <S.LeftBox>
            <p>둔산동 꿀잼동전노래연습장</p>
            <span>대상자: 2학년</span>
            <span>km: 9.8km</span>
            <span>예상가격: 10,000원</span>
            <span>현재 인원 수 : 2/4</span>
          </S.LeftBox>
          <CreateKakaoMap /* lat={latitude} lng={longitude} */ width={`400px`} height={`216px`}></CreateKakaoMap>
        </S.Content>
      </S.TaxiPotContainer>
    </S.Wrapper>
  );
};

export default MyPage;
