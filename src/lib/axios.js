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
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzMwMTg5ODcsImlhdCI6MTYzMzAxMTc4Nywic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.oZir_bOJbBWueV7Fns6AndelghbC_ACb5KxbDxCrhkAtUxmz1z-VavzJHpNjjbEyt2tn1PubUzQtOedK6AzmbQ';
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
