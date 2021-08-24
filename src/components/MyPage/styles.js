import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 350px;
`;

export const Title = styled.span`
  margin-bottom: 120px;
  font-size: 60px;
  font-family: 'NotoSansKR';
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    width: 1400px;
    display: flex;
  }

  & div div:first-child {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0 0 20px;
    background-color: #ffc044;
    color: white;
    font-size: 36px;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }
`;

export const UserInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 80px;
  font-size: 36px;
  font-family: 'DoHyeon';
  font-weight: 400;
  border: 3px solid #ffc044;
`;

export const NumberBox = styled.div`
  height: 70px;
`;

export const EmailBox = styled.div`
  height: 70px;
`;

export const PlaceBox = styled.div`
  height: 120px;
`;

export const PotBox = styled.div`
  height: 340px;
`;

export const ModifyBox = styled.span`
  cursor: pointer;
  & span {
    font-size: 16px;
  }
`;

export const PotInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #ffc044;
  padding-left: 80px;
  font-family: 'DoHyeon';
  font-weight: 400;

  & span {
    font-size: 36px;
    margin-bottom: 100px;
  }

  & p {
    font-size: 30px;
  }
`;
