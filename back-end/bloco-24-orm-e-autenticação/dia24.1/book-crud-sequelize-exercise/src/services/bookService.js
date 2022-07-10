const { book } = require('../database/models');

const bookService = {
  async getAll() {
    const books = book.findAll();
    return books;
  },
  async getById(id) {
    const book = await book.findByPk(id);
    return book;
  }
};

module.exports = bookService;