import styled from 'styled-components';

export const RadioMainWrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'NotoSansCJK';
    margin-bottom: 25px;
  }
  input,
  label {
    cursor: pointer;
  }
  input:nth-child(n + 3) {
    margin-left: 36px;
  }
  input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #ffc044;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;
