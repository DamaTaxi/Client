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
      throw err.response;
    });
};

export const requestWithAccessToken = async (url, method, headers, data) => {
  /* const ACCESS_TOKEN = 'Bearer ' + localStorage.getItem('accessToken'); */
  console.log(url, method, data, headers);
  const ACCESS_TOKEN =
    'Bearer ' +
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzI5MDAzNDAsImlhdCI6MTYzMjg5MzE0MCwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.ygoAxxnSvQ7IQjkZKXMNj7VbzpAUtnIbhz7Xx8qBAHwVTlc5Hx6acl51GxUuF6GQYi1SZdBI0R5pQ0AkTKs0lA';
  console.log(ACCESS_TOKEN);
  try {
    const res = await axios({
      url: BASE_URL + url,
      method,
      headers: { ...headers, [ACCESS_TOKEN_NAME]: ACCESS_TOKEN },
      data,
    });
    return res.data;
  } catch (err) {
    throw err.response;
  }
};
