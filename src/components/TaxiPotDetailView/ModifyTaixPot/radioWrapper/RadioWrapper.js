import React from 'react';
import * as S from './style';

const RadioWrapper = (props) => {
  const { onKeyPressEvent, onChangeEvent } = props;
  return (
    <S.RadioMainWrapper onKeyPress={onKeyPressEvent} onChange={onChangeEvent}>
      <h1>대상자</h1>
      <input id="radio-freshman" type="radio" name="target" value="FRESHMAN" />
      <label htmlFor="radio-freshman">1학년</label>
      <input id="radio-sophomore" type="radio" name="target" value="SOPHOMORE" />
      <label htmlFor="radio-sophomore">2학년</label>
      <input id="radio-senior" type="radio" name="target" value="SENIOR" />
      <label htmlFor="radio-senior">3학년</label>
      <input id="radio-all" type="radio" name="target" value="ALL" />
      <label htmlFor="radio-all">전체</label>
    </S.RadioMainWrapper>
  );
};

export default RadioWrapper;
