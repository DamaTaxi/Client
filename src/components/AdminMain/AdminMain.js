import React from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import ErrorReport from '../../assets/images/error_report.svg';
import Suggestion from '../../assets/images/suggestion.svg';
import UpToggle from '../../assets/images/up_toggle.svg';

const AdminMain = () => {
  const HeaderRightTag = (
    <S.HeaderRightWrapper>
      <S.LinkButton to="/1">DATA 페이지로 이동</S.LinkButton>
      <S.LoginButton>LOGIN</S.LoginButton>
    </S.HeaderRightWrapper>
  );

  const BottomLeftTag = (
    <S.BottomLeftWrapper>
      <S.BottomButton>
        <img src={ErrorReport} alt="" />
        <h1>오류 신고 리스트</h1>
        <p>오류 신고 확인</p>
      </S.BottomButton>
      <S.BottomButton>
        <img src={Suggestion} alt="" />
        <h1>기능 건의 리스트</h1>
        <p>기능 건의 사항 확인</p>
      </S.BottomButton>
    </S.BottomLeftWrapper>
  );

  const AsideToggleTag = (
    <S.Toggle>
      <img src={UpToggle} alt="" />
    </S.Toggle>
  );

  return <Background HeaderRightTag={HeaderRightTag} BottomLeftTag={BottomLeftTag} AsideToggleTag={AsideToggleTag} />;
};

export default AdminMain;
