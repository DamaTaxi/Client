import styled from 'styled-components';

export const GraphContainer = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  .yellowBorderBox {
    position: relative;
    width: ${(props) => (props.width ? `${props.width}px` : '118px')};
    height: ${(props) => (props.height ? `${props.height}px` : '20px')};
    border: #ffc044 1px solid;
    margin: 5px 0 0 14px;
  }
  .filledBox {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.filled ? `${props.filled}%` : `0`)};
    height: 100%;
    background-color: #ffc044;
    text-align: center;
    p {
      text-align: center;
      position: absolute;
      left: 45px;
      top: -6px;
    }
  }
`;
