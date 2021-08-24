import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

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
                <div className="list-section-wrapper"></div>
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
