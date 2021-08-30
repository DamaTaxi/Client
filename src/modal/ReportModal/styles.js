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
  justify-content: center;
  gap: 40px;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 70%;
  height: 80%;
  padding: 40px 50px;
  background: #fff;
  border-radius: 30px;
  z-index: 2;

  & span {
    font-size: 50px;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }

  & input {
    width: 100%;
    height: 60px;
    padding-left: 20px;
    border: 3px solid #8d8d8d;
    border-radius: 10px;
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
    outline: none;
  }

  & textarea {
    width: 100%;
    height: 400px;
    padding: 25px;
    border: 3px solid #8d8d8d;
    border-radius: 10px;
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
    outline: none;
  }

  & input:focus {
    border-color: #ffc044;
  }

  & textarea:focus {
    border-color: #ffc044;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  & button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 20px;
    font-family: 'NotoSansCJK';
    font-size: 18px;
    cursor: pointer;
  }

  & button:first-child {
    background-color: #ffc044;
  }

  & button:last-child {
    border: 1px solid #707070;
  }
`;
