import React, { useState } from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import UpToggle from '../../assets/images/up_toggle.svg';
import Clock from 'react-live-clock';
import RecentTaxi from '../RecentTaxi/RecentTaxi';
import MyPage from '../MyPage/MyPage';

const UserMain = () => {
  const [isUserLogin, setIsUserLogin] = useState(true);

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
          <Clock format={'HH시 mm분'} ticking={true} />
          <Clock format={'YYYY년 MM월 DD일'} ticking={true} />
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

  return (
    <S.Wrapper>
      <Background HeaderRightTag={HeaderRightTag} BottomLeftTag={BottomLeftTag} AsideToggleTag={AsideToggleTag} />
      <RecentTaxi />
      <MyPage />
    </S.Wrapper>
  );
};

export default UserMain;
