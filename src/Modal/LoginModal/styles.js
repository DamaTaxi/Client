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
  gap: 90px;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 50%;
  height: 70%;
  padding: 40px 100px;
  background: #fff;
  border-radius: 30px;
  z-index: 2;

  & span {
    font-size: 2.5rem;
    font-family: 'NotoSansKR';
    font-weight: bold;
  }
`;

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  font-family: 'NotoSansCJK';

  & input {
    width: 80%;
    height: 60px;
    padding-left: 25px;
    font-size: 1.375rem;
    font-weight: 600;
    border: 3px solid #8d8d8d;
    border-radius: 10px;
    outline: none;
  }

  & input:focus {
    border: 3px solid #ffc044;
  }

  & button {
    width: 80%;
    height: 65px;
    margin-top: 70px;
    border: 1px solid #707070;
    border-radius: 20px;
    background-color: #ffc044;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
