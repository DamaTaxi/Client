import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderRightWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 120 0 0 120;

  & button {
    width: 240px;
    height: 70px;
    border: none;
    border-radius: 40px;
    background-color: white;
    font-size: 2.5rem;
    font-family: 'DoHyeon';
    color: #f1b53d;
    z-index: 1;
    cursor: pointer;
  }
`;

export const BottomLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 120px 0 0 120px;

  & > span {
    font-size: 5rem;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & span {
    color: #707070;
    font-size: 2.1875rem;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }
`;

export const TimeBar = styled.div`
  position: relative;
  width: 700px;
  height: 60px;

  & time {
    height: 60px;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 30px;
    color: white;
    font-size: 2.8125rem;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }

  & time:first-child {
    width: 100%;
    padding-right: 20px;
    background-color: #f1b53d;
    justify-content: flex-end;
  }

  & time:last-child {
    width: 65%;
    background-color: #ffc044;
    justify-content: center;
  }
`;

export const Toggle = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: none;
  z-index: 1;
  border: none;
  cursor: pointer;
  outline: none;
`;
