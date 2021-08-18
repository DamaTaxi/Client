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
    p {
      position: absolute;
      text-align: center;
      left: ${(props) => (props.left ? `${props.left}%` : `42.08%`)};
      z-index: 10;
      font-size: 1rem;
    }
  }
  .filledBox {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.filled ? `${props.filled}%` : `0`)};
    height: 100%;
    background-color: #ffc044;
    text-align: center;
  }
`;
