import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const SearchContainer = (props) => {
  const { data, id, onChangeEvent, path, isSignUp } = props;

  return (
    <S.SearchContainer>
      {isSignUp ? '' : <h1>도착지(제목)</h1>}
      <div className="searchWrapper">
        <input
          onChange={onChangeEvent}
          name="title"
          className="searchBar"
          type="text"
          placeholder={'검색 버튼을 이용해 주세요.'}
          readOnly
          value={typeof data != 'undefined' ? data.data.place_name : '검색 버튼을 이용해 주세요.'}
        />
        <Link to={{ pathname: `/search-kakao:${id}`, state: { path: path } }}>
          <button>검색</button>
        </Link>
      </div>
    </S.SearchContainer>
  );
};

export default SearchContainer;
