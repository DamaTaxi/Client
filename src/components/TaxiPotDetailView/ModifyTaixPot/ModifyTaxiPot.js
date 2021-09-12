import React, { useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import OptionWrapper from '../../../templates/OptionWrapper/OptionWrapper';
import RadioWrapper from './radioWrapper/RadioWrapper';
import SearchContainer from './searchContainer/SearchContainer';

const ModifyTaxiPot = (props) => {
  const data = props.location.state;
  const test = (e) => {
    e.preventDefault();
  };
  console.log(data);
  return (
    <S.TaxiPotWrapper>
      <Link to="/" id="taxiPotLogoA">
        <S.TaxiPotLogo />
      </Link>
      <S.TaxiPotArticle>
        <div className="modifyButton">
          <p>택시 팟 수정하기</p>
        </div>
        <S.TaxiPotForm id="taxiPotForm" onSubmit={test}>
          <S.FirstFloorContainer>
            <SearchContainer data={data} />
            <S.PromisePlaceContainer>
              <h1>약속 장소</h1>
              <input type="text" placeholder="약속 장소를 입력해 주세요" />
            </S.PromisePlaceContainer>
          </S.FirstFloorContainer>
          <S.SecondFloorContainer>
            <RadioWrapper />
            <div className="maxPersonNumber">
              <h1>최대 인원 수</h1>
              <input type="number" min="1" max="4" defaultValue="1" />
              <span>명</span>
            </div>
            <div className="dayAndTime">
              <h1>날짜와 시간</h1>
              <input type="date" />
              <input type="time" />
            </div>
          </S.SecondFloorContainer>
          <S.ThirdFloorContainer>
            <h1>상세설명</h1>
            <textarea></textarea>
          </S.ThirdFloorContainer>
        </S.TaxiPotForm>
        <OptionWrapper
          contents="변경사항이 있다면 수정완료 버튼을 눌러 팟을 수정해 주세요!"
          buttonName="수정 완료"
          cansleName="취소"
          successLink="/my-taxi-pot"
          cansleLink="/my-taxi-pot"
        />
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

ModifyTaxiPot.defaultProps = {
  data: [],
};

export default ModifyTaxiPot;