import React, { useState } from 'react';
import { request } from '../../lib/axios';
import * as S from './styles';

const ReportModal = ({ isShowModal, contentTexts, closeModal }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  const { title, content } = inputs;

  const onSubmit = () => {
    const type = contentTexts.title === '오류 신고' ? 'error-report' : 'suggestion';

    if (!(title && content)) {
      alert('빈칸이 있는지 확인해주세요');
      return;
    }

    request('post', `/${type}`, {}, { title, content })
      .then((res) => {
        alert('문의하신 내용이 접수되었습니다.');
        closeModal();
      })
      .catch((err) => {
        throw err;
      });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    isShowModal && (
      <>
        <S.Background />
        <S.ModalContainer>
          <span>{contentTexts.title}</span>
          <input name="title" value={title} type="text" onChange={onChange} placeholder="제목" autoFocus />
          <textarea name="content" value={content} onChange={onChange} placeholder={contentTexts.placeholder} />
          <S.ButtonContainer>
            <button onClick={onSubmit}>제출</button>
            <button onClick={closeModal}>취소</button>
          </S.ButtonContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default ReportModal;
