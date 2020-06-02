module.exports = {
  server: {
    port: 5555,
  },
  appSettings: {
    etag: false,
  },
  cors: {
    origin: ['*'],
    credentials: true,
  },
  naver: {
    clientId: process.env.NAVER_API_CLIENT_ID,
    clientSecret: process.env.NAVER_API_CLIENT_SECRET,
  },
  api: {
    naver: {
      urlBase: 'https://openapi.naver.com/v1/datalab/',
    }
  },
};