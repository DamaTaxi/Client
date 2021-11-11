import React, { useState } from 'react';
import * as S from './styles';
import Developer from '../../assets/images/developer_information.svg';
import Error from '../../assets/images/error_report.svg';
import Suggestion from '../../assets/images/suggestion.svg';
import ReportModal from '../../modal/ReportModal/ReportModal';
import { useHistory } from 'react-router';

const Additional = () => {
  const [isShowSuggestionModal, setIsShowSuggestionModal] = useState(false);
  const [isShowReportModal, setIsShowReportModal] = useState(false);
  const history = useHistory();

  const contentTexts = [
    {
      title: '오류 신고',
      placeholder: '오류 내용\n- 대마택시의 비정상적인 오류를 알려주세요!',
    },
    {
      title: '기능 건의',
      placeholder: '건의 내용\n- 대마택시에 추가되었으면 하는 기능을 자유롭게 건의해주세요!',
    },
  ];

  const closeModal = () => {
    setIsShowReportModal(false);
    setIsShowSuggestionModal(false);
  };

  return (
    <S.Wrapper>
      <S.Title>부가 기능</S.Title>
      <S.Content>
        <S.MenuButton
          onClick={() => {
            history.push('/developer-information');
          }}
        >
          <img src={Developer} alt="" />
          <h1>개발자 정보 보러가기</h1>
          <p>대마택시 version.1 개발자 정보</p>
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            setIsShowSuggestionModal(true);
          }}
        >
          <img src={Error} alt="" />
          <h1>오류 신고</h1>
          <p>대마택시 비정상적인 오류</p>
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            setIsShowReportModal(true);
          }}
        >
          <img src={Suggestion} alt="" />
          <h1>기능 건의</h1>
          <p>대마택시에 추가되었으면 하는 기능</p>
        </S.MenuButton>
      </S.Content>
      <ReportModal
        contentTexts={contentTexts[0]}
        isShowModal={isShowSuggestionModal}
        closeModal={closeModal}
        type="report"
      />
      <ReportModal
        contentTexts={contentTexts[1]}
        isShowModal={isShowReportModal}
        closeModal={closeModal}
        type="suggestion"
      />
    </S.Wrapper>
  );
};

export default Additional;
