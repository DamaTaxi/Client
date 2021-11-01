import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 320px;
  margin-bottom: 250px;
`;

export const GraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Graphs = styled.div`
  height: 450px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 120px;

  & div {
    width: 100px;
  }

  & div span {
    width: 100px;
    text-align: center;
    position: absolute;
    font-family: 'NotoSansKR';
    font-size: 2rem;
    font-weight: bold;
  }

  & div span:first-child {
    top: -40px;
    color: #707070;
  }

  & div span:nth-child(2) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  & div span:last-child {
    width: 180px;
    position: absolute;
    left: -40px;
    bottom: -55px;
    font-size: 1.625rem;
  }
`;

export const All = styled.div`
  height: ${(props) => `${props?.height}%`};
  position: relative;
  background-color: #ffc044;
`;

export const Reserved = styled.div`
  height: ${(props) => `${props?.height}%`};
  position: relative;
  background-color: #f1b53d;
`;

export const Gathering = styled.div`
  height: ${(props) => `${props?.height}%`};
  position: absolute;
  bottom: ${(props) => `${props?.bottom}%`};
  right: -50%;
  background-color: #f4e458;

  & img {
    position: absolute;
    bottom: -20px;
    left: -35px;
    z-index: 1;
  }
`;

export const BottomBar = styled.div`
  width: 550px;
  height: 20px;
  border-radius: 20px;
  background-color: #797778;
`;

export const ImageContainer = styled.div`
  width: 750px;
  height: 550px;
  position: relative;

  & img {
    width: 100%;
    height: 450px;
    position: absolute;
  }

  & div {
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: rgba(255, 255, 255, 0.77);
  }

  & span,
  & button {
    font-family: 'NotoSansKR';
    font-weight: bold;
  }

  & span:first-child {
    font-size: 3.5rem;
  }

  & span:nth-child(2) {
    font-size: 2rem;
    color: #707070;
  }

  & button {
    width: 450px;
    height: 100px;
    border: none;
    margin-top: 50px;
    background-color: #ffc044;
    font-size: 2.25rem;
    color: white;
    border-radius: 80px;
    cursor: pointer;
    outline: none;
  }
`;
