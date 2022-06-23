const connection = require('../db/connection');

const modelBooks = {
  async getAllBooks() {
    const [books] = await connection.query(
      'select * from model_example.books;',
    );
    return books;
  },
  async getBookById(bookId) {
    const sql = 'select * from model_example.books where id = ?'
    const [[book]] = await connection.query(sql, [bookId]);
    return book;
  },
  async getBookByAuthorId(authorId) {
    const sql = 'select * from model_example.books where author_id = ?'
    const [book] = await connection.query(sql, [authorId]);
    return book;
  },
  async postNewBook(book) {
    const sql = 'insert into model_example.books set ?';
    const [insertResponse] = await connection.query(sql, [book]);
    return { 
      affectedRows: insertResponse.affectedRows,
      insetId: insertResponse.insertId
    };
  } 
};

module.exports = modelBooks;