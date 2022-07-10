const bookService = require('../services/bookService');

const bookController = {
  /**
   * 
   * @param {import('express').Request} _req 
   * @param {import('express').Response} res 
   */
  async getAll(_req, res) {
    const books = await bookService.getAll();
    res.status(200).json(books);
  }
};

module.exports = bookController;