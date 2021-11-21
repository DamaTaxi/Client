import React from 'react';
import { useHistory } from 'react-router';
import { requestWithAccessToken } from '../../lib/axios';
import * as S from './styles';

const ListModal = ({ modalContent, isShowModal, closeModal, id, type }) => {
  const history = useHistory();

  const deleteContent = () => {
    switch (type) {
      case 'error-report':
        requestWithAccessToken('delete', `/error-report/${id}`)
          .then((res) => {
            alert('게시물 삭제에 성공했습니다.');
            history.go(0);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case 'suggestion':
        requestWithAccessToken('delete', `/suggestion/${id}`)
          .then((res) => {
            alert('게시물 삭제에 성공했습니다.');
            history.go(0);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        console.log('?');
    }
  };
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
