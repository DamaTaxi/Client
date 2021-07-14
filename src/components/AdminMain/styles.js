import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 40px;
  background-color: white;
  font-size: 1.875rem;
  font-family: 'DoHyeon';
  color: #f1b53d;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

export const LoginButton = styled(LinkButton)`
  width: 200px;
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
    width: 200px;
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 2.5rem;
    color: black;
    font-family: 'BlackHanSans';
    font-weight: 400;
  }

  & p {
    font-size: 1.5rem;
    color: #9a9a9a;
    font-family: 'DoHyeon';
  }
`;

export const Toggle = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: none;
  border: none;
  cursor: pointer;
`;
