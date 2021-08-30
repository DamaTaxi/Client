import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const ModifyTaxiPot = () => {
  return (
    <S.TaxiPotWrapper>
      <S.TaxiPotLogo />
      <S.TaxiPotArticle>
        <div className="modifyButton">
          <p>택시 팟 수정하기</p>
        </div>
        <S.TaxiPotForm>
          <S.FirstFloorContainer>
            <S.SearchContainer>
              <h1>도착지(제목)</h1>
              <div className="searchWrapper">
                <input className="searchBar" type="text" value={'검색 버튼을 이용해 주세요'} />
                <Link to="/taxi-pot">
                  <button>검색</button>
                </Link>
              </div>
            </S.SearchContainer>
            <S.PromisePlaceContainer>
              <h1>약속 장소</h1>
              <input type="text" placeholder="약속 장소를 입력해 주세요" />
            </S.PromisePlaceContainer>
          </S.FirstFloorContainer>
          <S.SecondFloorContainer>
            <div className="targetPerson">
              <h1>대상자</h1>
              <input id="radio-freshman" type="radio" name="target" value="FRESHMAN" />
              <label htmlFor="radio-freshman">1학년</label>
              <input id="radio-sophomore" type="radio" name="target" value="SOPHOMORE" />
              <label htmlFor="radio-sophomore">2학년</label>
              <input id="radio-senior" type="radio" name="target" value="SENIOR" />
              <label htmlFor="radio-senior">3학년</label>
              <input id="radio-all" type="radio" name="target" value="ALL" />
              <label htmlFor="radio-all">전체</label>
            </div>
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
        <S.OptionWrapper>
          <p>변경사항이 있다면 수정완료 버튼을 눌러 팟을 수정해 주세요!</p>
          <button>수정 완료</button>
          <Link to="/taxi-pot">
            <button>취소</button>
          </Link>
        </S.OptionWrapper>
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

export default ModifyTaxiPot;
