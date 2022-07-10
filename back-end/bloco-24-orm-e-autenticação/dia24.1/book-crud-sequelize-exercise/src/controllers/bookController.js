const bookService = require('../services/bookService');

const bookController = {
  /**
   * 
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  async getAll(_req, res) {
    const books = await bookService.getAll();
    res.status(200).json(books);
  },
    /**
   * 
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  async getbyId(req, res) {
    const { id } = req.params;
    const book = await bookService.getById(id);
    res.status(200).json(book);
  },
    /**
   * 
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  async create(req, res) {
    const validatedBook = await bookService.validateNewBook(req.body)
    const createdBook = await bookService.create(validatedBook);
    res.status(201).json(createdBook);
  }
};

module.exports = bookController;