import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
  background-color: #d4d4d4;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  & span {
    margin: 40px 40px 0px 15px;
    color: #707070;
    font-family: 'NotoSansKR';
    font-size: 40px;
    font-weight: bold;
  }
`;

export const TextBox = styled.div`
  & p {
    color: #9a9a9a;
    font-family: 'DoHyeon';
    font-size: 28px;
  }
`;

export const Line = styled.div`
  height: 3px;
  border: 1px solid #707070;
  border-radius: 20px;
  background: none;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  & img {
    width: 50px;
  }
`;

export const UpLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & span {
    font-family: 'DoHyeon';
    font-size: 30px;
  }

  & span:last-child {
    color: #9a9a9a;
  }
`;

export const Logos = styled.div`
  margin-right: 85px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
  }

  & a:first-child img {
    margin-right: 10px;
  }

  & a:last-child img {
    width: 65px;
  }
`;
