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
  },
  async getbyId(req, res) {
    const { id } = req.params;
    const book = await bookService.getById(id);
    res.status(200).json(book);
  }
};

module.exports = bookController;