const express = require('express');

const api = express();

api.use(express.json());

api.get('/ping', (req, res) => {
  const response = { message: 'pong' };
  res.json(response);
});

api.post('/hello', (req, res) => {
  const { body } = req;
  const name = body.name;
  const response = { message: `Hello, ${name}` };
  res.status(200).json(response);
})

api.post('/greetings', (req, res) => {
  const { body: { name, age } } = req;
  if(age > 17) {
    const response = { message: `Hello, ${name}!` };
    return res.status(200).json(response);
  }
  const unauthorizedMessage = { message: 'Unauthorized' };
  res.status(401).json(unauthorizedMessage);
})

api.listen('4000', () => {
  console.log('aplicativo iniciol');
});