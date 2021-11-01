import React from 'react';
import * as S from './styles';
import Background from '../../assets/images/taxi_background.jpg';
import Arrow from '../../assets/images/graph_arrow.svg';

const RecentTaxi = () => {
  const all = 8;
  const reserved = 2;
  const gathering = all - reserved;
  const allPercent = all <= 0 ? 0 : 100;
  const reservedPercent = all <= 0 ? 0 : Math.round((reserved / all) * 100);
  const gatheringPercent = allPercent - reservedPercent;

  return (
    <S.Wrapper>
      <S.GraphsContainer>
        <S.Graphs>
          <S.All height={allPercent}>
            <span>{all}개</span>
            {allPercent > 0 && <span>{allPercent}%</span>}
            <span>모든 택시 팟</span>
          </S.All>
          <S.Reserved height={reservedPercent}>
            <span>{reserved}개</span>
            {reservedPercent > 0 && <span>{reservedPercent}%</span>}
            <span>예약 완료</span>
          </S.Reserved>
          <S.Gathering height={gatheringPercent} bottom={reservedPercent}>
            <span>{gathering}개</span>
            {gatheringPercent > 0 && <span>{gatheringPercent}%</span>}
            <img src={Arrow} alt="" />
            <span>모집 중</span>
          </S.Gathering>
        </S.Graphs>
        <S.BottomBar />
      </S.GraphsContainer>
      <S.ImageContainer>
        <img src={Background} alt="" />
        <div>
          <span>앗 놓치겠다! 택시 팟!</span>
          <span>모집 중인 택시 팟을 신청하러 갑시다</span>
          <button>택시 팟 페이지로 이동</button>
        </div>
      </S.ImageContainer>
    </S.Wrapper>
  );
};

export default RecentTaxi;
