import React, { useState } from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import UpToggle from '../../assets/images/up_toggle.svg';

const UserMain = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  const toTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const HeaderRightTag = (
    <S.HeaderRightWrapper>
      <button>택시 팟</button>
      {isUserLogin && <button>마이페이지</button>}
      <button>부가 기능</button>
      {isUserLogin ? <button>LOGOUT</button> : <button>LOGIN</button>}
    </S.HeaderRightWrapper>
  );

  const BottomLeftTag = (
    <S.BottomLeftWrapper>
      <span>현재 택시 팟 현황은 ?!</span>
      <S.TimeContainer>
        <span>이 그래프는</span>
        <S.TimeBar>
          <div>12시 31분</div>
          <div>2021년 05월 26일</div>
        </S.TimeBar>
        <span>에 예약 중인 택시 팟과 예약 완료된 택시 팟입니다</span>
      </S.TimeContainer>
    </S.BottomLeftWrapper>
  );

  const AsideToggleTag = (
    <S.Toggle onClick={toTopPage}>
      <img src={UpToggle} alt="" />
    </S.Toggle>
  );

  return <Background HeaderRightTag={HeaderRightTag} BottomLeftTag={BottomLeftTag} AsideToggleTag={AsideToggleTag} />;
};

export default UserMain;
