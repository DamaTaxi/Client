import React, { useEffect, useState } from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import ErrorReport from '../../assets/images/error_report.svg';
import Suggestion from '../../assets/images/suggestion.svg';
import UpToggle from '../../assets/images/up_toggle.svg';
import List from '../../templates/List/List';
import LoginModal from '../../Modal/LoginModal/LoginModal';
import ListModal from '../../Modal/ListModal/ListModal';

const AdminMain = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showLoginModal = () => {
    setIsShowModal(true);
  };

  const getListModal = (id) => {
    // await res = async api호출하는함수(id)
    /* setModalContent({
      ...res
    }) */
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const toTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toErrorReport = () => {
    window.scrollTo({
      top: 1134,
      behavior: 'smooth',
    });
  };

  const toSuggestion = () => {
    window.scrollTo({
      top: 2177,
      behavior: 'smooth',
    });
  };

  const HeaderRightTag = (
    <S.HeaderRightWrapper>
      <S.LinkButton to="/1">DATA 페이지로 이동</S.LinkButton>
      {isShowLogin || <S.LoginButton onClick={showLoginModal}>LOGIN</S.LoginButton>}
    </S.HeaderRightWrapper>
  );

  const BottomLeftTag = (
    <S.BottomLeftWrapper>
      <S.BottomButton onClick={toErrorReport}>
        <img src={ErrorReport} alt="" />
        <h1>오류 신고 리스트</h1>
        <p>오류 신고 확인</p>
      </S.BottomButton>
      <S.BottomButton onClick={toSuggestion}>
        <img src={Suggestion} alt="" />
        <h1>기능 건의 리스트</h1>
        <p>기능 건의 사항 확인</p>
      </S.BottomButton>
    </S.BottomLeftWrapper>
  );

  const AsideToggleTag = (
    <S.Toggle onClick={toTopPage}>
      <img src={UpToggle} alt="" />
    </S.Toggle>
  );

  const titles = {
    error: '오류 신고 리스트',
    suggestion: '건의 사항 리스트',
  };

  const list = [
    {
      id: 1,
      title: '오류신고가 되지 않습니다.',
    },
    {
      id: 2,
      title: '오류신고가 진짜 되지 않습니다.',
    },
    {
      id: 3,
      title: '오류신고가 되지 않습니다.',
    },
    {
      id: 4,
      title: '오류신고가 진짜 되지 않습니다.',
    },
    {
      id: 5,
      title: '오류신고가 되지 않습니다.',
    },
  ];

  const pageNum = [1, 2, 3, 4, 5];

  return (
    <S.Wrapper>
      <Background HeaderRightTag={HeaderRightTag} BottomLeftTag={BottomLeftTag} AsideToggleTag={AsideToggleTag} />
      {isShowLogin && (
        <>
          <List getListModal={getListModal} title={titles.error} list={list} pageNum={pageNum} />
          <List getListModal={getListModal} title={titles.suggestion} list={list} pageNum={pageNum} />
        </>
      )}
      <LoginModal isShowModal={isShowModal} closeModal={closeModal} />
      <ListModal modalContent={modalContent} isShowModal={isShowModal} closeModal={closeModal} />
    </S.Wrapper>
  );
};

export default AdminMain;
