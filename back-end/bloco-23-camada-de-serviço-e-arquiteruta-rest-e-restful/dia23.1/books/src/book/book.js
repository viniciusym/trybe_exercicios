const connection = require('../db/connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'select * from model_example.books;',
  );
  return books;
}

const getBookByAuthorId = async (authorId) => {
  const books = await getAllBooks();
  const bookByAuthorId = books.filter((book) => book.author_id === Number(authorId));
  return bookByAuthorId;
}

module.exports = {
  getAllBooks,
  getBookByAuthorId
};