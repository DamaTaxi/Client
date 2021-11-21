import React from 'react';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import * as S from './styles';
import { request } from '../../lib/axios';
import { useEffect } from 'react/cjs/react.development';
import useLocalStorage from '../../hook/useLocalStorage';

const Callback = ({ location }) => {
  const [isUserLogin, setIsUserLogin] = useLocalStorage('isUserLogin', false);
  const query = queryString.parse(location.search);
  const { code } = query;
  const { push } = useHistory();

  useEffect(() => {
    code &&
      request('post', '/login', {}, { code })
        .then((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          setIsUserLogin(true);
          if (res.firstLogin) {
            push('/signup');
          } else {
            push('/user-main');
          }
        })
        .catch((err) => {
          throw err;
        });
  }, []);

  return <S.Loading>로딩 중...</S.Loading>;
};

export default Callback;
