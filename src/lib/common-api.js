const axios = require('axios');
// const request = require('request');
// const fetch = require('node-fetch');
const config = require('@/config');

async function callApi(path, params, method) {
  const url = config.api.naver.urlBase + path;
  try {
    const response = await axios(url, {
      method: method || 'get',
      data: JSON.stringify(params) || {},
      headers: { 'X-Naver-Client-Id': config.naver.clientId, 'X-Naver-Client-Secret': config.naver.clientSecret, 'Content-Type': 'application/json' }
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
    return new Promise.reject();
  }
}

// function requestApi(path, params) {
//   return new Promise((resolve, reject) => {
//     const api_url = config.api.naver.urlBase + path;
//     request.post({
//       url: api_url,
//       body: JSON.stringify(params),
//       headers: {
//         'X-Naver-Client-Id': config.naver.clientId,
//         'X-Naver-Client-Secret': config.naver.clientSecret,
//         'Content-Type': 'application/json'
//       }
//     },
//       function (error, response, body) {
//         if (response.statusCode === 200) {
//           console.log(response.statusCode, body);
//           return resolve(body);
//         }
//         if (error) return reject(error);
//       });
//   });
// }

// async function fetchApi(path, params, method) {
//   const url = config.api.naver.urlBase + path;
//   try {
//     const response = await fetch(url, {
//       method: method || 'get',
//       body: JSON.stringify(params) || {},
//       headers: { 'X-Naver-Client-Id': config.naver.clientId, 'X-Naver-Client-Secret': config.naver.clientSecret, 'Content-Type': 'application/json' }
//     });
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//     return new Promise.reject();
//   }
// }

module.exports = {
  callApi,
  // requestApi,
  // fetchApi,
};
