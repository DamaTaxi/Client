import React from 'react';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import * as S from './styles';

const Callback = ({ location }) => {
  const { push } = useHistory();

  setTimeout(() => {
    const query = queryString.parse(location.search);
    const { code } = query;
    localStorage.setItem('code', code);
    push('/user-main');
  }, 2000);
  return <S.Loading>로딩 중...</S.Loading>;
};

export default Callback;
