import React from 'react';
import { Link } from 'react-router-dom';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';
import * as S from './style';

const memberList = [
  {
    number: 2205,
    name: '김재현',
    phoneNumber: '010-9564-0889',
  },
  {
    number: 2205,
    name: '김재현',
    phoneNumber: '010-9564-0889',
  },
];

const MyTaxiPot = () => {
  const memberListMap = memberList.length
    ? memberList.map((memberList, index) => {
        const { number, name, phoneNumber } = memberList;
        return (
          <li>
            <span>{number}</span>
            <span>{name}</span>
            <span>{phoneNumber}</span>
          </li>
        );
      })
    : '리스트 불러오는중...';

  return (
    <S.TaxiPotWrapper>
      <S.TaxiPotLogo />
      <S.TaxiPotArticle>
        <S.TaxiPotMainContainer>
          <S.LeftAside>
            <div className="dayAndName">
              <p>2004/12/23</p>
              <p>2205 김재현</p>
            </div>
            <div className="titleAndModify">
              <h1>둔산동 꿀잼동전노래연습장</h1>
              <Link>
                <div></div>
                <p>수정</p>
              </Link>
            </div>
            <S.LeftAsideSection>
              <p>대상자 : 2학년</p>
              <p>km : 9.8km</p>
              <p>예상가격 : 10,000원</p>
              <GraphContainer reserve={2} all={4} width={244} left={45} height={22} />
              <p>날짜와 시간 : 2021-03-01-16:00</p>
              <p>약속 장소 : 기숙사 정문</p>
              <p>상세 설명 : 우리 모두 벌점을 받자</p>
            </S.LeftAsideSection>
            <S.MemberListWrapper>
              <button>멤버 보기</button>
              <ul>{memberListMap}</ul>
            </S.MemberListWrapper>
          </S.LeftAside>
          <S.RigthAside>
            <div className="kakaoMap"></div>
          </S.RigthAside>
        </S.TaxiPotMainContainer>
      </S.TaxiPotArticle>
    </S.TaxiPotWrapper>
  );
};

MyTaxiPot.defaultProps = {
  memberList: [],
};

export default MyTaxiPot;