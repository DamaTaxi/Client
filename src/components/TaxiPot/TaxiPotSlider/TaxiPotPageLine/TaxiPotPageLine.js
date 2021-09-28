import React from 'react';
import * as S from './style';

const TaxiPotPageLine = (props) => {
  const { percentFunc, current, total } = props;
  return (
    <S.TaxiPotPageLine width={percentFunc(current, total)}>
      <div className="currentContainer">
        <div>
          <p>{current}번째</p>
        </div>
      </div>
      <div className="allContainer">
        <div>{total}개</div>
      </div>
    </S.TaxiPotPageLine>
  );
};

export default TaxiPotPageLine;