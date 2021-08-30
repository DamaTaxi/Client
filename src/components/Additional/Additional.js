import React from 'react';
import * as S from './styles';
import Developer from '../../assets/images/developer_information.svg';
import Error from '../../assets/images/error_report.svg';
import Suggestion from '../../assets/images/suggestion.svg';

const Additional = () => {
  return (
    <S.Wrapper>
      <S.Title>부가 기능</S.Title>
      <S.Content>
        <S.MenuButton>
          <img src={Developer} alt="" />
          <h1>개발자 정보 보러가기</h1>
          <p>대마택시 version.1 개발자 정보</p>
        </S.MenuButton>
        <S.MenuButton>
          <img src={Error} alt="" />
          <h1>오류 신고</h1>
          <p>대마택시 비정상적인 오류</p>
        </S.MenuButton>
        <S.MenuButton>
          <img src={Suggestion} alt="" />
          <h1>기능 건의</h1>
          <p>대마택시에 추가되었으면 하는 기능</p>
        </S.MenuButton>
      </S.Content>
    </S.Wrapper>
  );
};

export default Additional;
