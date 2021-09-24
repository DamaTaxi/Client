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
    'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzI0OTg2MDYsImlhdCI6MTYzMjQ5MTQwNiwic3ViIjoiaGVsbG9oZWxsb0BnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIn0.QZGWa6Bhc-GlRHpY_7m3Q2tdf_A-2d3qDCLtXjDqWMeNoXI6zQ7ft0_K64tctlu3JUHzstVVTIWuIpd3zdNVFw';
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
