import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const TaxiPotList = () => {
  return (
    <S.taxiPotListWrapper>
      <>
        <S.listHeader>
          <h1>택시 팟 리스트</h1>
          <Link to="#">
            <p>+</p>
            <p>택시 팟 만들기</p>
          </Link>
        </S.listHeader>
      </>
      <>
        <S.listContainer>
          <Link>
            <S.taxiPotList>
              <div>
                <div className="list-title-wrapper">
                  <h1>둔산동 꿀잼동전노래연습장</h1>
                  <p>2004.12.03 작성</p>
                </div>
                <div className="list-section-wrapper"></div>
              </div>
              <div className="kakaoMap"></div>
            </S.taxiPotList>
          </Link>
          <Link>
            <S.taxiPotList></S.taxiPotList>
          </Link>
        </S.listContainer>
      </>
    </S.taxiPotListWrapper>
  );
};

export default TaxiPotList;
