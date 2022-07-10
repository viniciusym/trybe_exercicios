const { book } = require('../database/models');

const bookService = {
  async getAll() {
    const books = book.findAll();
    return books;
  }
};

module.exports = bookService;