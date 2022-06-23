const express = require('express');
const { getAllBooks, getBookById, postNewBook } = require('./book/book');
const getByAuthorId = require('./middlewares/getBookByAuthorId')
const validateNewBook = require('./middlewares/validateNewBook');

const api = express();

api.use(express.json());

api.get('/books', getByAuthorId, async(_req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

api.post('/books', validateNewBook, async (req, res) => {
  const newBook = req.body;
  await postNewBook(newBook);

  res.status(201).json({ message: 'Livro cadastrado com sucesso'});
})

api.get('/books/:id', async (req, res) => {
  const { params: { id } } = req;
  const book = await getBookById(id);
  if (!book) {
    return res.status(404).json({ message: 'Not found' });
  };
  res.status(200).json(book);
})

api.listen(3000, () => {
  console.log('started');
});
