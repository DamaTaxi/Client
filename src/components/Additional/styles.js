import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const Title = styled.p`
  font-family: 'NotoSansKR';
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & h1 {
    margin-top: 40px;
    font-family: 'BlackHanSans';
    font-size: 50px;
  }

  & p {
    color: #9a9a9a;
    font-family: 'DoHyeon';
    font-size: 30px;
  }
`;
