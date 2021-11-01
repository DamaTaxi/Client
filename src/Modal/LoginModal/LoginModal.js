import React, { useState } from 'react';
import { request } from '../../lib/axios';
import * as S from './styles';

const LoginModal = ({ setIsCheckLogin, isShowModal, closeModal }) => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const blankCheck = (values) => {
    return values.some((ele) => {
      if (ele === '') {
        alert('빈칸이 있는 지 확인해주세요.');
      }
      return ele === '';
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputsValues = Object.values(inputs);
    if (blankCheck(inputsValues)) return;
    request('post', '/login/admin', {}, { id: inputs.id, password: inputs.password })
      .then((res) => {
        alert('로그인에 성공했습니다.');
        localStorage.setItem('accessToken', res['accessToken']);
        localStorage.setItem('refreshToken', res['refreshToken']);
        closeModal();
        setIsCheckLogin(true);
      })
      .catch((err) => {
        switch (err.status) {
          case 404:
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            break;
          default:
            alert('로그인할 수 없습니다.');
        }
      });
  };

  return (
    isShowModal && (
      <>
        <S.Background onClick={closeModal} />
        <S.ModalContainer>
          <span>관리자 로그인</span>
          <S.InputContainer onSubmit={onSubmit}>
            <input name="id" type="text" value={inputs.id} onChange={onChange} placeholder="아이디를 입력해주세요" />
            <input
              name="password"
              type="password"
              value={inputs.password}
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요"
            />
            <button>로그인하기</button>
          </S.InputContainer>
        </S.ModalContainer>
      </>
    )
  );
};

export default LoginModal;
