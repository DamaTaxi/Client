import React, { useEffect, useState } from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import UpToggle from '../../assets/images/up_toggle.svg';
import Clock from 'react-live-clock';
import RecentTaxi from '../RecentTaxi/RecentTaxi';
import MyPage from '../MyPage/MyPage';
import Additional from '../Additional/Additional';
import Footer from '../Footer/Footer';
import TaxiPotPreview from '../TaxiPotPreview/TaxiPotPreview';
import { request } from '../../lib/axios';
import useLocalStorage from '../../hook/useLocalStorage';

const UserMain = () => {
  const [isUserLogin, setIsUserLogin] = useLocalStorage('isUserLogin', false);
  const [all, setAll] = useState(0);
  const [reserve, setReserve] = useState(0);

  useEffect(() => {
    request('get', '/taxi-pot/info')
      .then((res) => {
        setAll(res.all);
        setReserve(res.reserve);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('code')) {
      request('post', '/login/test')
        .then((res) => {
          alert('로그인에 성공했습니다.');
          setIsUserLogin(true);
          localStorage.setItem('accessToken', res['accessToken']);
          localStorage.setItem('refreshToken', res['refreshToken']);
        })
        .catch((err) => {
          alert('로그인에 실패했습니다.');
          throw err;
        });
    }
  });

  const toTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toTaxiPot = () => {
    window.scrollTo({
      top: 1830,
      behavior: 'smooth',
    });
  };

  const toMyPage = () => {
    window.scrollTo({
      top: 2830,
      behavior: 'smooth',
    });
  };

  const toAdditional = () => {
    if (isUserLogin) {
      window.scrollTo({
        top: 4000,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 2800,
        behavior: 'smooth',
      });
    }
  };

  const login = () => {};

  const logout = () => {
    alert('로그아웃에 성공했습니다.');
    setIsUserLogin(false);
    localStorage.clear();
  };

  const HeaderRightTag = (
    <S.HeaderRightWrapper>
      <button onClick={toTaxiPot}>택시 팟</button>
      {isUserLogin && <button onClick={toMyPage}>마이페이지</button>}
      <button onClick={toAdditional}>부가 기능</button>
      {isUserLogin ? (
        <button onClick={logout}>LOGOUT</button>
      ) : (
        <a href="https://dsm-auth.vercel.app/external/login?redirect_url=http://127.0.0.1:3000/callback&client_id=bc9cad9475bf475ba24c9d3b31af6e6c">
          <button onClick={login}>LOGIN</button>
        </a>
      )}
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
      <RecentTaxi all={all} reserve={reserve} />
      <TaxiPotPreview />
      {isUserLogin && <MyPage />}
      <Additional />
      <Footer />
    </S.Wrapper>
  );
};

export default UserMain;
