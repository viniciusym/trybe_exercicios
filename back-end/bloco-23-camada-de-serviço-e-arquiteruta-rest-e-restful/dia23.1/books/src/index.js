const express = require('express');
const { getAllBooks, getBookById } = require('./book/book');
const getByAuthorId = require('./middlewares/getBookByAuthorId');

const api = express();

api.get('/books', getByAuthorId, async(_req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

api.get('/books/:id', async (req, res) => {
  const { params: { id } } = req;
  const book = await getBookById(id);
  if (book.length === 0) {
    res.status(404).json({ message: 'Not found' });
    return;
  };
  res.status(200).json(book);
})

api.listen(3000, () => {
  console.log('started');
});
