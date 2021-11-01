import React from 'react';
import * as S from './styles';
import footer_logo from '../../assets/images/footer_logo.svg';
import up_logo from '../../assets/images/up_logo.png';
import github_logo from '../../assets/images/github_logo.png';
import facebook_logo from '../../assets/images/facebook_logo.png';
import damataxi_logo from '../../assets/images/damataxi_logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <img src={footer_logo} alt="" />
        <span>version 0.1</span>
        <S.TextBox>
          <p>의무귀가 날에 택시 팟을 잡아서 가고 싶지만, 택시 팟이 없어 택시를 혼자 타거나.</p>
          <p>
            버스를 타고 가는 학생들을 위해, 모르는 학생들과도 쉽게 모여 택시를 타고 갈 수 있게 하기 위한 UP 프로젝트
          </p>
        </S.TextBox>
      </S.Top>
      <S.Line />
      <S.Bottom>
        <S.UpLogoContainer>
          <img src={up_logo} alt="" />
          <span>UP</span>
          <span>2021</span>
        </S.UpLogoContainer>
        <S.Logos>
          <a target="_blank" rel="noreferrer" href="https://github.com/DamaTaxi">
            <img src={github_logo} alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/DSM-UP-112827210421734">
            <img src={facebook_logo} alt="" />
          </a>
          <a href="/user-main">
            <img src={damataxi_logo} alt="" />
          </a>
        </S.Logos>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Footer;
