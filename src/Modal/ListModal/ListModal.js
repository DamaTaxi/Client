import React from 'react';
import * as S from './styles';

const ListModal = ({ ModalContent, isShowModal, closeModal }) => {
  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer>
          <span>{ModalContent.title}</span>
          <S.ContentContainer>{ModalContent.content}</S.ContentContainer>
          <S.ButtonContainer>
            <button onClick={closeModal}>확인</button>
            <button>삭제</button>
          </S.ButtonContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default ListModal;
