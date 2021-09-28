import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';

const taxiPotDataArr = [
  {
    title: '둔산동 꿀잼동전노래연습장',
    meetingAt: '2021-12-03-00:00',
    place: '기숙사 정문',
    all: 4,
    reserve: 3,
    creator: '김재현',
    target: 'ALL',
    createdAt: '2021-03-15-00:00',
    adress: '대전중구 유천1동',
  },
];

//date문자열 짤라서 가공하는 함수
function dateSplit(string) {
  let dateArray = string.split('-');
  let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일 작성`;
  return date;
}

const TaxiPotList = () => {
  const taxiPotListItem = taxiPotDataArr.length
    ? taxiPotDataArr.map((taxiPotDataArr, index) => {
        const { title, meetingAt, place, all, reserve, createdAt, target, creator, adress } = taxiPotDataArr;
        return (
          <Link to="/taxi-pot" key={index}>
            <S.TaxiPotList>
              <div className="list-title-wrapper">
                <h1>{title}</h1>
                <p>{dateSplit(createdAt)}</p>
              </div>
              <div className="list-section-wrapper">
                <S.FirstFloorWrapper>
                  <p id="marginRight">모집자: {creator}</p>
                  <GraphContainer reserve={reserve} all={all} width={250} left={44} height={17} marginTop={5} />
                  <p>약속장소 : {place}</p>
                </S.FirstFloorWrapper>
                <S.SecondFloorWrapper>
                  <p>대상자 : {target}</p>
                  <p>주소 : {adress}</p>
                  <p>날짜와 시간: {meetingAt}</p>
                </S.SecondFloorWrapper>
              </div>
            </S.TaxiPotList>
          </Link>
        );
      })
    : '로딩중';

  return (
    <S.TaxiPotListWrapper>
      <>
        <S.ListHeader>
          <h1>택시 팟 리스트</h1>
          <Link to="/make-taxi-pot">
            <p>+</p>
            <p>택시 팟 만들기</p>
          </Link>
        </S.ListHeader>
      </>
      <>
        <S.ListContainer>{taxiPotListItem}</S.ListContainer>
      </>
    </S.TaxiPotListWrapper>
  );
};

TaxiPotList.defaultProps = {};

export default TaxiPotList;
