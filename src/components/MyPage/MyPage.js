import React from 'react';
import * as S from './styles';
import Modify from '../../assets/images/modify.svg';

const MyPage = () => {
  return (
    <S.Wrapper>
      <S.Title>2101 권민정</S.Title>
      <S.Content>
        <S.NumberBox>
          <div>전화번호</div>
          <S.UserInfo>
            <span>010-2809-3338</span>
            <S.ModifyBox>
              <img src={Modify} alt=""></img>
              <span>수정</span>
            </S.ModifyBox>
          </S.UserInfo>
        </S.NumberBox>
        <S.EmailBox>
          <div>이메일</div>
          <S.UserInfo>
            <span>kodohyeon71@gmail.com</span>
            <S.ModifyBox>
              <img src={Modify} alt=""></img>
              <span>수정</span>
            </S.ModifyBox>
          </S.UserInfo>
        </S.EmailBox>
        <S.PlaceBox>
          <div>자주 가는 곳</div>
          <div></div>
        </S.PlaceBox>
        <S.PotBox>
          <div>현재 예약된 팟</div>
          <S.PotInfo>
            <span>둔산동 꿀잼동전노래연습장</span>
            <p>대상자: 2학년</p>
            <p>km: 9.8km</p>
            <p>예상가격: 10,000원</p>
            <p>현재 인원 수: 2/4</p>
          </S.PotInfo>
        </S.PotBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default MyPage;
