const express = require('express');
require('express-async-errors');
const cepRoute = require('./routes/cepRoute');

const { API_PORT } = process.env;

const api = express();

api.use(express.json());

api.use('/cep', cepRoute)

api.use((err, _req, res, _next) => {
  console.log(err);
})

api.listen(API_PORT, () => {
  console.log('api has been started');
});