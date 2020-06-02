require('module-alias/register');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const config = require('@/config');

if (config.exitOnEnvChange) {
  const utils = require('@/lib/utils');

  utils.watchFile('.env', () => {
    process.exit();
  });
}

let app = express();
const server = http.createServer(app);

Object.entries(config.appSettings).forEach(([k, v]) => app.set(k, v));

app.use(cors(config.cors));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (_, res) => res.send('OK'));

app.use('/api', require('./api'));

server.listen(config.server.port, () => {
  console.log("app running on port.", server.address().port);
});

// handle CTRL+C
process.on('SIGINT', () => {
  process.exit();
});