import axios from 'axios';

const BASE_URL = 'http://3.36.161.36';

export const request = (method, url, headers, body) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers,
    body,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const requestWithAccessToken = (method, url, headers, body) => {
  const ACCESS_TOKEN = 'Bearer ' + localStorage.getItem('accessToken');
  return axios({
    method,
    url: BASE_URL + url,
    headers: { ...headers, Authorization: ACCESS_TOKEN },
    body,
  });
};
