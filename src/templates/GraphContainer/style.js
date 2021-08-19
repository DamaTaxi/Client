import styled from 'styled-components';

export const GraphContainer = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  p:first-child {
    margin-right: 8px;
  }
  .yellowBorderBox {
    position: relative;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border: #ffc044 1px solid;
    p {
      position: absolute;
      text-align: center;
      left: ${(props) => `${props.left}%`};
      z-index: 10;
      font-size: 1rem;
    }
  }
  .filledBox {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.filled}%`};
    height: 100%;
    background-color: #ffc044;
    text-align: center;
  }
`;
