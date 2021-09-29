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
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzI4Nzc1MTQsImlhdCI6MTYzMjg3MDMxNCwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.6ODoFljh_Vhx96lU0SFseXZg3sh5UbjouxyKe08BbAooH9NPjwi68POvBSV4wcfUbTLEl1_xMlFbkcnVqFlQVQ';
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
