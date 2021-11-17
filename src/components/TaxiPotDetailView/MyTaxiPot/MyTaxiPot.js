import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';
import CreateKakaoMap from '../../../templates/CreateKakaoMap/CreateKakaoMap';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import * as S from './style';
import { requestWithAccessToken, request } from '../../../lib/axios';

let memberList = [];

const MyTaxiPot = () => {
  const [isClick, setIsClick] = useState(false);
  const [userTaxiPotData, setTaxiPotData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const toggle = () => setIsClick(!isClick);

  const history = useHistory();
  const location = useLocation();
  /* const data = location.state; */
  const data = { id: 2 };

  const { address, all, content, creator, latitude, longitude, meetingAt, place, target, reserve, title } =
    userTaxiPotData;

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
    : '';

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
    memberList = [];
    request('get', `/taxi-pot/${data.id}`, {}, {})
      .then((res) => {
        memberList = memberList.concat(res.users);
        setTaxiPotData(res);
        setIsFetching(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTaxiPot = (e) => {
    e.preventDefault();
    requestWithAccessToken('delete', `/taxi-pot/${data.id}`, {}, {})
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          history.push('taxi-pot');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.TaxiPotWrapper>
      <Link id="TaxiPotLogoLink" to={{ pathname: '/taxi-pot' }}>
        <S.TaxiPotLogo />
      </Link>
      <S.TaxiPotArticle onSubmit={deleteTaxiPot}>
        {isFetching ? (
          <S.TaxiPotMainContainer>
            <S.LeftAside isClick={isClick}>
              <div className="dayAndName">
                <p>2004/12/23</p>
                <p>{`${creator.gcn} ${creator.name}`}</p>
              </div>
              <div className="titleAndModify">
                <h1>{title}</h1>
              </div>
              <S.LeftAsideSection>
                <p>주소 : {address}</p>
                <p>대상자 : {targetFunc(target)}</p>
                <GraphContainer reserve={reserve} all={all} width={244} left={45} height={22} />
                <p>날짜와 시간 : {meetingAt}</p>
                <p>약속 장소 : {place}</p>
                <p>상세 설명 : {content}</p>
              </S.LeftAsideSection>
              <S.MemberListWrapper isClick={isClick}>
                <button type="button" onClick={toggle}>
                  멤버 보기
                </button>
                <ul>{memberListMap}</ul>
              </S.MemberListWrapper>
            </S.LeftAside>
            <S.RigthAside>
              <CreateKakaoMap lat={latitude} lng={longitude} width={`650px`} height={`595px`}></CreateKakaoMap>
            </S.RigthAside>
          </S.TaxiPotMainContainer>
        ) : (
          ''
        )}
        <OptionWrapper
          contents="내가 만든 팟입니다! 팟을 삭제하거나 가입한 멤버를 볼 수 있습니다."
          buttonName="팟 삭제"
          cansleName="목록으로"
          cansleLink="/taxi-pot"
        />
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

MyTaxiPot.defaultProps = {
  memberList: [],
};

export default MyTaxiPot;
