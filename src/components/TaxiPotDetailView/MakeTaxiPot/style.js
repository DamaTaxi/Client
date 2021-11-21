import styled from 'styled-components';
import taxiPotSmallLogo from '../../../assets/images/TaxiPot/header-logo-yellow.png';

export const TaxiPotWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  #TaxiPotLogoLink {
    align-self: flex-start;
  }
`;

export const TaxiPotLogo = styled.div`
  background-image: url(${taxiPotSmallLogo});
  width: 266px;
  height: 78px;
  background-size: cover;
  object-fit: cover;
  margin: 17px 0 0 35px;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 710px;
  background-color: #f2f2f2;
  z-index: -100;
`;

export const TaxiPotArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 1550px;
  .modifyButton {
    width: 235px;
    height: 63px;
    background-color: #ffc044;
    border-top-left-radius: 42px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      font-size: 28px;
      font-family: 'DoHyeon';
    }
  }
`;

export const TaxiPotForm = styled.form`
  width: 100%;
  height: 640px;
  margin-top: 50px;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 16%);
  border-top-right-radius: 0;
`;

export const FirstFloorContainer = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

export const PromisePlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 100%;
  input {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
    padding-left: 20px;
    border: solid #8d8d8d 2px;
  }
  input::placeholder {
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
  }
  input:focus {
    outline: none;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'NotoSansCJK';
  }
`;

export const SecondFloorContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  .dayAndTime {
    h1 {
      font-size: 24px;
      font-weight: bold;
      font-family: 'NotoSansCJK';
      margin-bottom: 17px;
    }
    input {
      width: 150px;
      height: 40px;
      border-radius: 8px;
      border: #8d8d8d 2px solid;
    }
  }
  .maxPersonNumber {
    h1 {
      font-size: 24px;
      font-weight: bold;
      font-family: 'NotoSansCJK';
      margin-bottom: 17px;
    }
    input {
      width: 58px;
      height: 30px;
      border: solid #8d8d8d 2px;
      border-radius: 12px;
      font-family: 'NotoSansCJK';
      font-size: 19px;
      font-weight: 500;
      padding-left: 13px;
      color: rgb(102, 102, 102);
    }
    input:focus {
      outline: none;
    }
    span {
      font-family: 'NotoSansCJK';
      font-size: 21px;
      font-weight: bold;
      color: rgb(102, 102, 102);
      margin-left: 6px;
    }
  }
`;

export const ThirdFloorContainer = styled.div`
  margin: 65px 0 106px 90px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'NotoSansCJK';
    margin-bottom: 17px;
  }
  textarea {
    width: 1380px;
    height: 163px;
    border: #8d8d8d 1px solid;
    border-radius: 12px;
    font-family: 'NotoSansCJK';
    font-size: 19px;
    font-weight: 500;
    padding: 7px 0 0 20px;
  }
  textarea:focus {
    outline: none;
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
  input[type='submit'],
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
  input[type='submit'] {
    margin-left: 411px;
    background-color: #ffffff;
  }
  a > button {
    background-color: #ffc044;
    margin-left: 23px;
  }
`;
