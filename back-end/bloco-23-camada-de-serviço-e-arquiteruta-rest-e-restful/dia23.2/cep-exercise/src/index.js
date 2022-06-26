const express = require('express');
require('express-async-errors');

const { API_PORT } = process.env;

const api = express();

api.use(express.json());

api.listen(API_PORT, () => {
  console.log('api has been started');
});