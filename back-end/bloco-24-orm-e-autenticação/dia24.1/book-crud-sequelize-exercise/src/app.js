const express = require('express');
require('express-async-errors');
const bookRoute = require('./routes/bookRoute');

const api = express();

api.use(express.json());
api.use('/books', bookRoute);

api.use((err, _req, res, _next) => {
  const { name, message, status } = err;
  switch(name) {
    case 'BookNotFoundError':
      res.status(status).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
});

module.exports = api;