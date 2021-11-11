import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN_NAME = 'Authorization';

export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const requestWithAccessToken = (method, url, headers, data) => {
  const ACCESS_TOKEN =
    'Bearer ' +
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzY2MzY2ODIsImlhdCI6MTYzNjYyOTQ4Miwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.NwnTVxcOCLZuwk9chY_v6jmqqAleoDgeC8kMuBA1923mQArKXSNTjfNYnkCpVBgdbiTBNIyVTYVuJnFCdeJCLA';
  /* const ACCESS_TOKEN = 'Bearer ' + localStorage.getItem('accessToken'); */
  return axios({
    method,
    url: BASE_URL + url,
    headers: { ...headers, Authorization: ACCESS_TOKEN },
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
