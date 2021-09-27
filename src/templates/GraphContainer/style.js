import styled from 'styled-components';

export const GraphContainer = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  p:first-child {
    margin-right: 8px;
  }
  .yellowBorderBox {
    position: relative;
    margin-bottom: 4px;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    margin-top: ${(props) => `${props.marginTop}px`};
    border: #ffc044 1px solid;
    span {
      position: absolute;
      text-align: center;
      left: ${(props) => `${props.left}%`};
      z-index: 10;
      font-size: 1rem;
      font-weight: bold;
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
