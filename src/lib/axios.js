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

export const refresh = () => {
  const refresh = localStorage.getItem('refreshToken');
  request('patch', '/token-refresh', {}, { refreshToken: refresh })
    .then((res) => {
      localStorage.setItem('accessToken', res.data['accessToken']);
      localStorage.setItem('refreshToken', res.data['refreshToken']);
    })
    .catch((err) => {
      switch (err.response.status) {
        case 401:
          localStorage.setItem('isCheckLogin', false);
          window.location.href = '/admin-main';
          break;
        default:
          throw err;
      }
    });
};

/* export const requestWithAccessToken = (method, url, headers, data) => {
  const ACCESS_TOKEN = 'Bearer ' + localStorage.getItem('accessToken');
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
      switch (err.response.status) {
        case 401:
          // refresh();
          break;
        default:
          throw err;
      }
    });
}; */

export const requestWithAccessToken = (method, url, headers, data) => {
  const ACCESS_TOKEN =
    'Bearer ' +
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzY0NzE4NzUsImlhdCI6MTYzNjQ2NDY3NSwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.fgHrYXHwn_OstjL-nVi_kqHfd2osNU-gVfbO0a-gZZwED6FyiutXGJkmcKxHjn8Glf_v9eCj_fRlmK0Xf5X_uw';
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