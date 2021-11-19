import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 28px;
    font-family: 'Noto Sans CJK KR';
    font-weight: bold;
    margin-bottom: 15px;
  }
  .submit {
    background-color: #ffc044;
    border-radius: 80px;
    width: 200px;
    height: 55px;
    font-size: 'Noto Sans KR';
    font-weight: bold;
    color: #ffffff;
    font-size: 28px;
    margin-top: 90px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    &:hover {
      background-color: #ffffff;
      color: #ffc044;
      border: #ffc004 1px solid;
    }
  }
`;

export const SignUpContainer = styled.div`
  width: 688px;
  height: 778px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 65px;
  border: rgb(03, 02, 00, 35%) 2px solid;
  img {
    margin-top: 60px;
  }
  h1 {
    font-family: 'Noto Sans KR';
    font-size: 40px;
    color: #ffc044;
    margin-top: 45px;
    font-weight: 650;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 500px;
    height: 54px;
    color: black;
    font-size: 24px;
    font-family: 'Noto Sans CJK KR';
    padding-left: 15px;
    border-radius: 10px;
    &::placeholder {
      color: #9a9a9a;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cemter;
  p {
    text-align: center;
    margin-top: 60px;
  }
  span {
    color: #9a9a9a;
    font-size: 24px;
    font-family: 'Noto Sans CJK KR';
    &:nth-of-type(1) {
      margin-top: 10px;
    }
  }
`;
