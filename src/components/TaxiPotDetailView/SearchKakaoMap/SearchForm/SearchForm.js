import React from 'react';
import * as S from './style';

const SearchForm = (props) => {
  const { onSubmitEvent, onChangeSearch,value } = props;
  return (
    <S.SearchForm onSubmit={onSubmitEvent}>
      <h1>도착지(제목)</h1>
      <div className="searchWrapper">
        <input className="searchBar" type="text" placeholder="검색어를 입력해 주세요." onChange={onChangeSearch} value={value} />
        <div id="buttonWrapper">
          <input type="submit" value="검색" />
        </div>
      </div>
    </S.SearchForm>
  );
};

export default SearchForm;
