import styled from 'styled-components';

export const OptionWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f5efe7;
  border-radius: 26px;
  margin-top: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  p {
    font-family: 'DoHyeon';
    font-size: 28px;
    color: #9a9a9a;
    margin-left: 57px;
  }
  #buttonWrapper {
    margin-right: 57px;
  }
  #buttonWrapper > a > input[type='submit'],
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
    background-color: #ffffff;
  }
  a > button {
    background-color: #ffc044;
    margin-left: 23px;
  }
`;
