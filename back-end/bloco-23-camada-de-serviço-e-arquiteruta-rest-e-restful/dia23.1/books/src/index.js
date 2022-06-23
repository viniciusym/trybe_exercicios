const express = require('express');
const { getAllBooks } = require('./book/book');

const api = express();

api.get('/books', async(_req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

api.listen(3000, () => {
  console.log('started');
});
