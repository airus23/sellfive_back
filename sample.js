var request = require('request');

var client_id = 'ECNwIotudGlqF6ItONCS';
var client_secret = 'rlP1Lrut9f';

var api_url = 'https://openapi.naver.com/v1/datalab/shopping/categories';
var request_body = {
  "startDate": "2020-03-01",
  "endDate": "2020-04-10",
  "timeUnit": "month",
  "category": [
    { "name": "패션의류", "param": ["50000000"] },
    { "name": "화장품/미용", "param": ["50000002"] }
  ],
  "device": "pc",
  "ages": ["20", "30"],
  "gender": "f"
};

request.post({
  url: api_url,
  body: JSON.stringify(request_body),
  headers: {
    'X-Naver-Client-Id': client_id,
    'X-Naver-Client-Secret': client_secret,
    'Content-Type': 'application/json'
  }
},
  function (error, response, body) {
    console.log(response.statusCode);
    console.log(body);
  });