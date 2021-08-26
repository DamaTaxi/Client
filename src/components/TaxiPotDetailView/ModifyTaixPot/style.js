import styled from 'styled-components';
import taxiPotSmallLogo from '../../../assets/images/TaxiPot/header-logo-yellow.png';

export const TaxiPotWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .searchWrapper {
    width: 600px;
    display: flex;
    align-items: center;
    position: relative;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'NotoSansCJK';
    margin-left: 8px;
  }
  a {
    margin-right: 12px;
    position: absolute;
    right: 0;
  }
  a > button {
    width: 60px;
    height: 35px;
    background-color: #ffc044;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .searchBar {
    width: 100%;
    height: 60px;
    border: solid #ffc044 3px;
    border-radius: 14px;
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
    padding-left: 20px;
  }
  .searchBar:focus {
    outline: none;
  }
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
