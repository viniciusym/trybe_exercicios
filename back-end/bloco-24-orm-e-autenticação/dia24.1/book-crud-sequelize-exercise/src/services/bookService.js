const { book } = require('../database/models');
const BookNotFoundError = require('../errors/BookNotFoundError');

const bookService = {
  async getAll() {
    const books = book.findAll();
    return books;
  },
  async getById(id) {
    const bookById = await book.findByPk(id);
    if(bookById === null) throw new BookNotFoundError('Book not found');
    return bookById;
  }
};

module.exports = bookService;