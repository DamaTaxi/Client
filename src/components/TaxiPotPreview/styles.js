import styled from 'styled-components';

export const MiddleHeaderTitle = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 20px;

  h1 {
    font-family: 'NotoSansKR';
    font-size: 60px;
    font-weight: bold;
  }

  span {
    color: #707070;
    font-family: 'NotoSansKR';
    font-size: 32px;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;
  margin-top: 100px;
  margin-bottom: 200px;
  & a {
    color: #fff;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: #fff;
  }
  & div {
    width: 320px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: #ffc044;
    color: white;
    font-family: 'NotoSansKR';
  }
`;

export const MakeTaxiPotButton = styled.div`
  cursor: pointer;

  & p {
    font-size: 30px;
    font-weight: bold;
  }

  & p:first-child {
    font-size: 70px;
    margin-bottom: 15px;
    margin-right: 10px;
  }
`;

export const ToTaxiPotPage = styled.div`
  font-size: 30px;
  font-weight: bold;
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: #fff;
  }
`;
