import React from 'react';
import * as S from './styles';
import HeaderLogo from '../../assets/images/header_logo.svg';
import TaxiImage from '../../assets/images/taxi_image.png';

const Background = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <span>DAMATAXI</span>
      </S.Header>
      <S.Section>
        <S.Title>
          <img src={HeaderLogo} alt="" />
          <span>ADMIN</span>
        </S.Title>
        <S.Subtitle>
          <div>
            <span>같이 택시 타실래요?</span>
            <span>좋은 사람들과 좋은 시간....</span>
          </div>
          <span>version 0.1</span>
        </S.Subtitle>
      </S.Section>
      <S.BackgroundBottom />
      <S.TaxiImg src={TaxiImage} />
    </S.Wrapper>
  );
};

export default Background;
