import React from 'react';
import * as S from './styles';

const ReportModal = ({ isShowModal, contentTexts, closeModal }) => {
  return (
    isShowModal && (
      <>
        <S.Background />
        <S.ModalContainer>
          <span>{contentTexts.title}</span>
          <input placeholder="제목" />
          <textarea placeholder={contentTexts.placeholder} />
          <S.ButtonContainer>
            <button>제출</button>
            <button onClick={closeModal}>취소</button>
          </S.ButtonContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default ReportModal;
