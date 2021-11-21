import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 350px;
`;

export const UserName = styled.p`
  margin-bottom: 125px;
  font-size: 60px;
  font-family: 'NotoSansKR';
  font-weight: bold;
`;

export const NumberContainer = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const EmailContainer = styled(NumberContainer)``;

export const PlaceContainer = styled(NumberContainer)``;

export const TaxiPotContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  height: 350px;
  .isNull {
    font-family: 'DoHyeon';
    font-size: 36px;
    font-weight: 400;
    text-align: center;
  }
  a {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border: 3px solid #ffc044;
    color: #000;
    text-decoration: none;
    outline: none;
    &:hover,
    &:active {
      text-decoration: none;
      color: #000;
    }

    & div {
      display: flex;
      align-items: center;
      font-family: 'DoHyeon';
      font-size: 36px;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border: 3px solid #ffc044;

  & div {
    display: flex;
    align-items: center;
    font-family: 'DoHyeon';
    font-size: 36px;
    font-weight: 400;
  }
`;

export const Title = styled.p`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc044;
  color: white;
  font-size: 36px;
  font-family: 'NotoSansKR';
  font-weight: bold;
  border-radius: 20px 0 0 20px;
`;

export const ModifyBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & span {
    position: relative;
    top: 10px;
    font-size: 16px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & p {
    margin-bottom: 120px;
    align-self: flex-start;
  }

  & span {
    font-size: 30px;
    width: 100%;
  }
`;

export const KakaoMap = styled.img`
  width: 50%;
  height: 60%;
`;
