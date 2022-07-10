const { book } = require('../database/models');

const bookService = {
  async getAll() {
    const books = await book.getAll();
    return books;
  }
};

module.exports = bookService;