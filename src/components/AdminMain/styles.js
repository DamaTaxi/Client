import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderRightWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 70px;
  border-radius: 40px;
  background-color: white;
  font-size: 2.5rem;
  font-family: 'DoHyeon';
  color: #f1b53d;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

export const LoginButton = styled(LinkButton)`
  width: 250px;
`;

export const BottomLeftWrapper = styled.div`
  display: flex;
  gap: 200px;
  margin: 60px 0 0 150px;
`;

export const BottomButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: none;

  & img {
    width: 225px;
    margin-bottom: 40px;
  }

  & h1 {
    font-size: 3.125rem;
    color: black;
    font-family: 'BlackHanSans';
    font-weight: 400;
  }

  & p {
    font-size: 1.875rem;
    color: #9a9a9a;
    font-family: 'DoHyeon';
  }
`;

export const Toggle = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: none;
  z-index: 5;
  border: none;
  cursor: pointer;
`;
