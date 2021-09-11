import React from 'react';
import * as S from './style';

const RadioWrapper = () => {
  return (
    <S.RadioMainWrapper>
      <h1>대상자</h1>
      <input
        id="radio-freshman"
        type="radio"
        name="target"
        value="FRESHMAN"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <label htmlFor="radio-freshman">1학년</label>
      <input
        id="radio-sophomore"
        type="radio"
        name="target"
        value="SOPHOMORE"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <label htmlFor="radio-sophomore">2학년</label>
      <input
        id="radio-senior"
        type="radio"
        name="target"
        value="SENIOR"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <label htmlFor="radio-senior">3학년</label>
      <input
        id="radio-all"
        type="radio"
        name="target"
        value="ALL"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <label htmlFor="radio-all">전체</label>
    </S.RadioMainWrapper>
  );
};

export default RadioWrapper;
