import React from 'react';
import * as S from './styles';

const ListModal = ({ modalContent, isShowModal, closeModal }) => {
  const deleteContent = () => {};

  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer>
          <span>{modalContent.title}</span>
          <S.ContentContainer>{modalContent.content}</S.ContentContainer>
          <S.ButtonContainer>
            <button onClick={closeModal}>확인</button>
            <button onClick={deleteContent}>삭제</button>
          </S.ButtonContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default ListModal;
