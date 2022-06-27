const express = require('express');
require('express-async-errors');
const cepRoute = require('./routes/cepRoute');

const { API_PORT } = process.env;

const api = express();

api.use(express.json());

api.use('/cep', cepRoute)

api.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'InvalidDataError':
      res.status(401).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'AlreadyExistsError':
      res.status(409).json({ message });
    default:
      res.status(500).json(message);
  }
})

api.listen(API_PORT, () => {
  console.log('api has been started');
});