import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Modify from '../../assets/images/modify.svg';
import CreateKakaoMap from '../../templates/CreateKakaoMap/CreateKakaoMap';
import { requestWithAccessToken, request } from '../../../src/lib/axios';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const [myPageApiData, setMyPageApiData] = useState({});
  const [myTaxiApiData, setMyTaxiApiData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { gcn, name, tel, email, potId } = myPageApiData;
  const { title, target, reserve, all, meetingAt, latitude, longitude } = myTaxiApiData;

  console.log(myPageApiData);

  useEffect(() => {
    getMypageInfo();
  }, []);

  useEffect(() => {
    getSignUpData();
  }, [isLoading]);

  const getMypageInfo = () => {
    requestWithAccessToken('get', `/mypage`, {}, {})
      .then((res) => {
        setMyPageApiData(res);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSignUpData = () => {
    if (typeof potId === 'undefined') {
      setIsLoading(false);
    } else {
      if (potId === null) {
        console.log('예약된 팟이 없습니다.');
      } else {
        requestWithAccessToken('get', `/mypage/taxi-pot`, {}, {})
          .then((res) => {
            console.log(res);
            setMyTaxiApiData(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

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

  return (
    <S.Wrapper>
      <S.UserName>
        {gcn} {name}
      </S.UserName>
      <S.NumberContainer>
        <S.Title>전화번호</S.Title>
        <S.Content>
          <div>{typeof tel === 'undefined' ? '' : tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.NumberContainer>
      <S.EmailContainer>
        <S.Title>이메일</S.Title>
        <S.Content>
          <div>{email}</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.EmailContainer>
      <S.PlaceContainer>
        <S.Title>자주 가는 곳</S.Title>
        <S.Content>
          <div>대전광역시 유성구 가정북로 76</div>
          <S.ModifyBox>
            <img src={Modify} alt="" />
            <span>수정</span>
          </S.ModifyBox>
        </S.Content>
      </S.PlaceContainer>
      <S.TaxiPotContainer>
        <S.Title>현재 예약된 팟</S.Title>
        {potId === null ? (
          <Link className="isNull">현재 예약된 팟이 없습니다.</Link>
        ) : (
          <Link
            to={{
              pathname: `sign-taxi-pot${potId}`,
              state: {
                id: potId,
              },
            }}
          >
            <S.LeftBox>
              <p>{title}</p>
              <span>대상자: {targetFunc(target)}</span>
              <span>
                현재 인원 수 : {reserve}/{all}
              </span>
              <span>날짜와 시간 : {meetingAt}</span>
            </S.LeftBox>
            <CreateKakaoMap lat={latitude} lng={longitude} width={`400px`} height={`216px`}></CreateKakaoMap>
          </Link>
        )}
      </S.TaxiPotContainer>
    </S.Wrapper>
  );
};

export default MyPage;
