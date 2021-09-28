import React from 'react';
import * as S from './styles';

const ListModal = ({ ModalContent, isShowModal, closeModal }) => {
  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer>
          <span>택시팟이 안 만들어져요 ㅠㅠ</span>
          <S.ContentContainer>
            입력칸 다 채우고 생성 버튼 눌렀는데도 제가 만든 팟이 안 보이네요 ㅠㅠ 오류 고쳐주세요!! 저 제주도
            가야합니다.
          </S.ContentContainer>
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
