import styled from 'styled-components';
import taxiPotSmallLogo from '../../../assets/images/TaxiPot/header-logo-yellow.png';

export const SearchKakaoMapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  #taxiPotLogoA {
    width: 100%;
  }
`;

export const TaxiPotLogo = styled.div`
  background-image: url(${taxiPotSmallLogo});
  width: 266px;
  height: 78px;
  background-size: cover;
  object-fit: cover;
  align-self: flex-start;
  margin: 17px 0 0 35px;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 710px;
  background-color: #f2f2f2;
  z-index: -100;
`;

export const MainArticle = styled.article`
  display: flex;
  width: 1590px;
  flex-direction: column;
`;

export const MainSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SearchListWrapper = styled.div`
  width: 810px;
  height: 630px;
  background-color: white;
  border-radius: 26px;
  margin-top: 59px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 16%);
`;

export const KakaoMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 740px;
  height: 690px;
  #designBox {
    width: 235px;
    height: 60px;
    background-color: #ffc044;
    border-top-left-radius: 41px;
    font-family: 'DoHyeon';
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
  }
  div:nth-child(2) {
    width: 100%;
    height: 630px;
    background-color: gray;
    border-radius: 17px;
    border-top-right-radius: 0;
  }
`;
