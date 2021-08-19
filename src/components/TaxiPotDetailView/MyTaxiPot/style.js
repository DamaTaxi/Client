import styled from 'styled-components';
import taxiPotSmallLogo from '../../../assets/images/TaxiPot/taxi-pot-small-logo.png';
import modifyImg from '../../../assets/images/modify.svg';

export const TaxiPotWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TaxiPotArticle = styled.div`
  margin-top: 35px;
`;

export const TaxiPotMainContainer = styled.div`
  width: 1580px;
  height: 690px;
  background-color: #ffffff;
  border-radius: 36px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const LeftAside = styled.aside`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  margin-left: 65px;
  .dayAndName {
    margin-top: 35px;
    width: 225px;
    p {
      font-size: 20px;
      color: #3a3232;
      font-family: 'NotoSansCJK';
      font-weight: bold;
    }
  }
  .titleAndModify {
    margin-top: 16px;
    width: 460px;
    h1 {
      font-size: 38px;
      border-bottom: solid 6px #ffc044;
      font-family: 'DoHyeon';
      margin-right: 23px;
    }
    a {
      display: flex;
      text-decoration: none;
      outline: none;
    }
    a:hover,
    a:active {
      text-decoration: none;
    }
    a > div {
      width: 38px;
      height: 37px;
      background-image: url(${modifyImg});
      margin-top: 4px;
    }
    a > p {
      display: inline;
      font-family: 'DoHyeon';
      font-size: 18px;
      align-self: flex-end;
      color: #000000;
    }
  }
  .dayAndName,
  .titleAndModify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftAsideSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 35px;
  height: 310px;
  p {
    font-size: 28px;
    font-family: 'NotoSansCJK';
    color: #3a3232;
    font-weight: 500;
  }
`;

export const RigthAside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .kakaoMap {
    width: 650px;
    height: 590px;
    border-radius: 31px;
    background-color: #d4d4d4;
  }
`;

export const MemberListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 24px;
  button {
    width: 156px;
    height: 53px;
    border-radius: 12px;
    background-color: #ffc044;
    font-size: 18px;
    font-family: 'NotoSansCJK';
    font-weight: 500;
    border: none;
  }
  ul {
    width: 418px;
    height: auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 16%);
  }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 418px;
    height: 60px;
  }
  li:nth-child(n + 2) {
    border-top: 1px solid #d4d4d4;
  }
`;
