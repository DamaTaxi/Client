import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
      throw err.response;
    });
};

export const requestWithAccessToken = (method, url, headers, data) => {
  const ACCESS_TOKEN =
    'Bearer ' +
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzI4Mjk5ODUsImlhdCI6MTYzMjgyMjc4NSwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.ptxhIXaKVuGaqUGjknfuIXGbjay4s2IYVNE3R9Cs7q0z9NkhQ58v9lhmHjp_dI0KTYceGsZ9NKf8TJOue0mD1w';
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
      throw err.response;
    });
};
