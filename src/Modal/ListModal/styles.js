import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 60%;
  height: 75%;
  padding: 40px;
  background: #fff;
  border-radius: 30px;
  z-index: 2;

  & span {
    margin-bottom: 40px;
    font-size: 40px;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 25px;
  padding: 30px;
  border: 3px solid #8d8d8d;
  border-radius: 10px;
  font-size: 22px;
  font-family: 'NotoSansCJK';
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  & button {
    width: 125px;
    height: 45px;
    border: 1px solid #707070;
    border-radius: 20px;
    font-size: 16px;
    font-family: 'NotoSansCJK';
    font-weight: 600;
    cursor: pointer;
  }

  & button:first-child {
    border: none;
    background-color: #ffc044;
  }
`;
