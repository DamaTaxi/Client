import React, { useEffect, useState } from 'react';
import Background from '../../templates/Background/Background';
import * as S from './styles';
import ErrorReport from '../../assets/images/error_report.svg';
import Suggestion from '../../assets/images/suggestion.svg';
import UpToggle from '../../assets/images/up_toggle.svg';
import List from '../../templates/List/List';
import LoginModal from '../../Modal/LoginModal/LoginModal';
import ListModal from '../../Modal/ListModal/ListModal';
import UseLocalStorage from '../../templates/UseLocalStorage/UseLocalStorage';
import { request, requestWithAccessToken } from '../../lib/axios';

const AdminMain = () => {
  const [isCheckLogin, setIsCheckLogin] = UseLocalStorage('isCheckLogin', false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowListModal, setIsShowListModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [reportPageIndex, setReportPageIndex] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    requestWithAccessToken('GET', `/error-report?size=5&page=${reportPageIndex}`)
      .then((res) => {
        console.log(res);
        setReportData(res.content);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reportPageIndex]);

  const showLoginModal = () => {
    setIsShowLoginModal(true);
  };

  const getListModal = (id) => {
    // await res = async api호출하는함수(id)
    /* setModalContent({
      ...res
    }) */
    setIsShowListModal(true);
  };

  const closeModal = () => {
    setIsShowLoginModal(false);
    setIsShowListModal(false);
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
      {isCheckLogin || <S.LoginButton onClick={showLoginModal}>LOGIN</S.LoginButton>}
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

  const pageNum = [1, 2, 3, 4, 5];

  return (
    <S.Wrapper>
      <Background HeaderRightTag={HeaderRightTag} BottomLeftTag={BottomLeftTag} AsideToggleTag={AsideToggleTag} />
      {isCheckLogin && (
        <>
          <List
            getListModal={getListModal}
            title={titles.error}
            list={reportData}
            pageNum={pageNum}
            reportPageIndex={reportPageIndex}
            setReportPageIndex={setReportPageIndex}
            totalPage={totalPage}
          />
          {/* <List getListModal={getListModal} title={titles.suggestion} list={list} pageNum={pageNum} /> */}
        </>
      )}
      <LoginModal setIsCheckLogin={setIsCheckLogin} isShowModal={isShowLoginModal} closeModal={closeModal} />
      <ListModal modalContent={modalContent} isShowModal={isShowListModal} closeModal={closeModal} />
    </S.Wrapper>
  );
};

export default AdminMain;
