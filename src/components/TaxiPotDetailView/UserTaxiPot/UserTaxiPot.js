import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { request, requestWithAccessToken } from '../../../lib/axios';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';
import CreateKakaoMap from '../../../templates/CreateKakaoMap/CreateKakaoMap';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import * as S from './style';

let memberList = [];

const UserTaxiPot = () => {
  const [isClick, setIsClick] = useState(false);
  const toggle = () => setIsClick(!isClick);
  const [userTaxiPotData, setTaxiPotData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const data = location.state;

  const { address, all, content, creator, latitude, longitude, meetingAt, place, target, reserve, title } =
    userTaxiPotData;

  const memberListMap = memberList.length
    ? memberList.map((memberList, index) => {
        const { gcn, name, number } = memberList;
        return (
          <li>
            <span>{gcn}</span>
            <span>{name}</span>
            <span>{number}</span>
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

  function taxiPotApplication(e) {
    e.preventDefault();
    requestWithAccessToken('post', `/taxi-pot/sub/${data.id}`, {}, {})
      .then((res) => {
        console.log(res);
        alert('택시팟이 신청되었습니다.');
        setTimeout(() => {
          history.push('/taxi-pot');
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        if (err.data.status) {
          alert('이미 택시팟을 신청하였거나 만들었습니다.');
        }
      });
  }

  return (
    <S.TaxiPotWrapper>
      <Link id="TaxiPotLogoLink" to={{ pathname: '/taxi-pot' }}>
        <S.TaxiPotLogo />
      </Link>
      <S.TaxiPotArticle onSubmit={taxiPotApplication}>
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
          contents="택시 팟입니다! 가입한 멤버를 볼 수 있고, 팟 신청을 눌러 함께할 수 있습니다."
          buttonName="팟 신청"
          cansleName="목록으로"
          cansleLink="/taxi-pot"
          successLink=""
        />
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

UserTaxiPot.defaultProps = {
  memberList: [],
};

export default UserTaxiPot;
