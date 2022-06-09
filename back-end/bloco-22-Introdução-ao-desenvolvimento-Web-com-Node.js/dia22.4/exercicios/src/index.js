const express = require('express');

const api = express();

api.get('/ping', (req, res) => {
  const response = { message: 'pong' };
  res.json(response);
});

api.listen('4000', () => {
  console.log('aplicativo iniciol');
});