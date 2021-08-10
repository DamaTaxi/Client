import React from 'react';
import * as S from './styles';

const ListModal = ({ isShowModal, closeModal }) => {
  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer></S.ModalContainer>
      </>
    )
  );
};

export default ListModal;
