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
            </S.PromisePlaceContainer>
          </S.FirstFloorContainer>
        </S.TaxiPotForm>
      </S.TaxiPotArticle>
      <S.BackgroundColor />
    </S.TaxiPotWrapper>
  );
};

export default ModifyTaxiPot;
