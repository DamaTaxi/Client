import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';

const TaxiPotList = () => {
  return (
    <S.TaxiPotListWrapper>
      <>
        <S.ListHeader>
          <h1>택시 팟 리스트</h1>
          <Link to="#">
            <p>+</p>
            <p>택시 팟 만들기</p>
          </Link>
        </S.ListHeader>
      </>
      <>
        <S.ListContainer>
          <Link>
            <S.TaxiPotList>
              <div>
                <div className="list-title-wrapper">
                  <h1>둔산동 꿀잼동전노래연습장</h1>
                  <p>2004.12.03 작성</p>
                </div>
                <div className="list-section-wrapper">
                  <S.FirstFloorWrapper>
                    <p>모집자: 김재현</p>
                    <p>예상가격: 10,000원</p>
                    <GraphContainer reserve={2} all={4} width={250} left={45} height={15} />
                    <p>약속장소 : 기숙사 정문</p>
                  </S.FirstFloorWrapper>
                  <S.SecondFloorWrapper>
                    <p>대상자 : 2학년</p>
                    <p>거리 : 9.8km</p>
                    <p>날짜와 시간: 2021-03-01-16:00</p>
                  </S.SecondFloorWrapper>
                </div>
              </div>
              <div className="kakaoMap"></div>
            </S.TaxiPotList>
          </Link>
          <Link>
            <S.TaxiPotList></S.TaxiPotList>
          </Link>
        </S.ListContainer>
      </>
    </S.TaxiPotListWrapper>
  );
};

export default TaxiPotList;
