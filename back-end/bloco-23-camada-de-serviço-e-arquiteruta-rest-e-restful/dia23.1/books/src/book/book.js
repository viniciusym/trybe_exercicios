const connection = require('../db/connection');

const getAllBooks = async () => {
  const [books] = await connection.query(
    'select * from model_example.books;',
  );
  return books;
}

const getBookById = async (bookId) => {
  const sql = 'select * from model_example.books where id = ?'
  const [[book]] = await connection.query(sql, [bookId]);
  return book;
}

const getBookByAuthorId = async (authorId) => {
  const sql = 'select * from model_example.books where author_id = ?'
  const [book] = await connection.query(sql, [authorId]);
  return book;
}

module.exports = {
  getAllBooks,
  getBookByAuthorId,
  getBookById
};