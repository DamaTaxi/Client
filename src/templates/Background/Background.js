import React from 'react';
import * as S from './styles';
import HeaderLogo from '../../assets/images/header_logo.svg';
import TaxiImage from '../../assets/images/taxi_image.png';

const Background = ({ HeaderRightTag, BottomLeftTag, AsideToggleTag }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <span>DAMATAXI</span>
        <div>{HeaderRightTag}</div>
      </S.Header>
      <S.Section>
        <S.Title src={HeaderLogo} />
        <S.Subtitle>
          <div>
            <span>같이 택시 타실래요?</span>
            <span>좋은 사람들과 좋은 시간....</span>
          </div>
          <span>version 0.1</span>
        </S.Subtitle>
      </S.Section>
      <S.BackgroundBottom>
        <div>{BottomLeftTag}</div>
      </S.BackgroundBottom>
      <S.TaxiImg src={TaxiImage} />
      <div>{AsideToggleTag}</div>
    </S.Wrapper>
  );
};

export default Background;
