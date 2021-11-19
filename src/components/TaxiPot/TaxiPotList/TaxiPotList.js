import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';
import { requestWithAccessToken } from '../../../lib/axios';

let content = [];
let scrollPage = 0;

//date문자열 짤라서 가공하는 함수
function dateSplit(string) {
  let dateArray = string.split('-');
  let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일 작성`;
  return date;
}

const TaxiPotList = () => {
  const [isFetching, setIsFetching] = useState(false);

  const targetFunc = (target) => {
    switch (target) {
      case 'FRESHMAN':
        return '1학년';
      case 'SOPHOMORE':
        return '2학년';
      case 'SENIOR':
        return '3학년';
      case 'ALL':
        return '전체';
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(`scrollPage: ${scrollPage}`);
  }, [scrollPage]);

  const getList = async () => {
    setIsFetching(true);
    await requestWithAccessToken('get', `/taxi-pot/?size=${1}&page=${scrollPage}`, {}, {})
      .then((res) => {
        console.log(res);
        if (res.content.length === 0) {
          console.log('비어있어요');
        } else {
          content = content.concat(res.content);
          scrollPage = scrollPage + 1;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsFetching(false);
  };

  useEffect(() => {
    if (scrollPage === 0) {
      getList();
    }
  }, [scrollPage]);

  //스크롤이 맨끝인가?
  useEffect(() => {
    function onScroll() {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && isFetching === false) {
        getList();
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const taxiPotListItem = content.length ? (
    content.map((taxiPotDataArr, index) => {
      const { title, meetingAt, place, all, reserve, createdAt, target, creator, address, id } = taxiPotDataArr;
      return (
        <Link
          to={{
            pathname: `/user-taxi-pot:${id}`,
            state: {
              id: id,
            },
          }}
          key={index}
        >
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
                <p>대상자 : {targetFunc(target)}</p>
                <p>주소 : {address}</p>
                <p>날짜와 시간: {meetingAt}</p>
              </S.SecondFloorWrapper>
            </div>
          </S.TaxiPotList>
        </Link>
      );
    })
  ) : (
    <S.TaxiPotList>
      <div className="loding-wrapper">
        <h1>불러오는 중입니다</h1>
      </div>
    </S.TaxiPotList>
  );

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

export default TaxiPotList;
