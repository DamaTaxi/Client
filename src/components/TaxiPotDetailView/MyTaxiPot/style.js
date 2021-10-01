import styled from 'styled-components';
import taxiPotSmallLogo from '../../../assets/images/TaxiPot/taxi-pot-small-logo.png';
import modifyImg from '../../../assets/images/modify.svg';

export const TaxiPotWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 710px;
  background-color: #f2f2f2;
  z-index: -100;
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
  display: flex;
  flex-direction: column;
`;

export const TaxiPotMainContainer = styled.div`
  width: 1580px;
  height: 685px;
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
    margin-top: ${(props) => (props.isClick ? '35px' : '80px')}; //클릭했을때 : 35px; 클릭 안했을때 : 75px;
    width: 225px;
    transition: 0.4s;
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
    font-size: 26px;
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
`;

export const MemberListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 30px;
  button {
    width: 156px;
    height: 53px;
    border-radius: 12px;
    background-color: #ffc044;
    font-size: 18px;
    font-family: 'NotoSansCJK';
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
  ul {
    width: 418px;
    height: auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 16%);
    z-index: 10;
    transition: 1s;
    display: ${(props) => (props.isClick ? 'flex' : 'none')}; //클릭 했을떄 flex, 안하면 none
    flex-direction: column;
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

export const OptionWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f5efe7;
  border-radius: 26px;
  margin-top: 21px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  p {
    font-family: 'DoHyeon';
    font-size: 28px;
    color: #9a9a9a;
    margin-left: 57px;
  }
  button {
    font-family: 'NotoSansCJK';
    font-size: 23px;
    font-weight: 500;
    width: 188px;
    height: 60px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  button:nth-child(2) {
    margin-left: 411px;
    background-color: #ffffff;
  }
  a > button {
    background-color: #ffc044;
    margin-left: 23px;
  }
`;
