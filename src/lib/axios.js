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
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzQxMTA3MDYsImlhdCI6MTYzNDEwMzUwNiwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.IC9-IHhqkehopkI8esuN7MiTYl3dZzTN_U5uEcECL39QxHcEKv92BnCas5zjSGgtCKByzmCrSE1PvwzOGAi6Ow';
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
