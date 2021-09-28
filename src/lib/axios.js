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
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzI4MTE1OTcsImlhdCI6MTYzMjgwNDM5Nywic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.e9zTq-8kuOyDfr3Z2X5SPqdLXatTa8-nn76w9KJsmzfTI40NoMGPASX3iBy42Gw4aUoY38Rme1ekF5YRGCQU0g';
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
