import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import RadioWrapper from '../ModifyTaixPot/radioWrapper/RadioWrapper';
import SearchContainer from '../ModifyTaixPot/searchContainer/SearchContainer';

const MakeTaxiPot = () => {
  const [myPageModifyData, setMyPageModifyData] = useState({});
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (typeof location.state !== 'undefined') {
      setMyPageModifyData((prevState) => ({
        ...prevState,
        adress: data.data.address_name,
        title: data.data.place_name,
        latitude: data.data.y,
        longitude: data.data.x,
      }));
    }
  }, [data]);

  useEffect(() => {
    setMyPageModifyData((prevState) => ({
      ...prevState,
      amount: 1,
    }));
  }, []);

  console.log(data);
  console.log(myPageModifyData);

  const onKeyPressEvent = (e) => {
    if (e.key == 'Enter') e.preventDefault();
  };

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setMyPageModifyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const test = (e) => {
    e.preventDefault();
    console.log(myPageModifyData);
  };

  return (
    <S.TaxiPotWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.TaxiPotArticle>
        <div className="modifyButton">
          <p>택시 팟 수정하기</p>
        </div>
        <S.TaxiPotForm id="taxiPotForm" name="myForm" onSubmit={test}>
          <S.FirstFloorContainer>
            <SearchContainer data={data} onChangeEvent={onChangeEvent} path="make-taxi-pot" id={1} />
            <S.PromisePlaceContainer>
              <h1>약속 장소</h1>
              <input
                type="text"
                placeholder="약속 장소를 입력해 주세요"
                name="place"
                onChange={onChangeEvent}
                onKeyPress={onKeyPressEvent}
              />
            </S.PromisePlaceContainer>
          </S.FirstFloorContainer>
          <S.SecondFloorContainer>
            <RadioWrapper onKeyPressEvent={onKeyPressEvent} onChangeEvent={onChangeEvent} />
            <div className="maxPersonNumber" onKeyPress={onKeyPressEvent}>
              <h1>최대 인원 수</h1>
              <input type="number" name="amount" onChange={onChangeEvent} min="1" max="4" defaultValue="1" />
              <span>명</span>
            </div>
            <div className="dayAndTime" onKeyPress={onKeyPressEvent}>
              <h1>날짜와 시간</h1>
              <input type="date" name="meetingAt-date" onChange={onChangeEvent} />
              <input type="time" name="meetingAt-time" onChange={onChangeEvent} />
            </div>
          </S.SecondFloorContainer>
          <S.ThirdFloorContainer>
            <h1>상세설명</h1>
            <textarea name="content" onChange={onChangeEvent}></textarea>
          </S.ThirdFloorContainer>
        </S.TaxiPotForm>
        <OptionWrapper
          contents="함께할 팟이 필요하신가요? 팟 생성을 눌러 새로운 팟을 만들고 인원을 모집하세요!"
          buttonName="팟 생성"
          cansleName="취소"
          successLink="/taxi-pot"
          cansleLink="/taxi-pot"
        />
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

MakeTaxiPot.defaultProps = {
  data: [],
};

export default MakeTaxiPot;
