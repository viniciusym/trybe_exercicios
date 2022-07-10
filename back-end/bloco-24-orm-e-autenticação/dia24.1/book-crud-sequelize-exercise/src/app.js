const express = require('express');
const bookRoute = require('./routes/bookRoute');

const api = express();

api.use(express.json());

api.use('/books', bookRoute);

module.exports = api;