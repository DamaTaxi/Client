import React from 'react';
import * as S from './styles';

const LoginModal = ({ isShowModal, closeModal }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer>
          <span>관리자 로그인</span>
          <S.InputContainer onSubmit={onSubmit}>
            <input placeholder="아이디를 입력해주세요" />
            <input placeholder="비밀번호를 입력해주세요" />
            <button>로그인하기</button>
          </S.InputContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default LoginModal;
