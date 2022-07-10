const bookService = require('../services/bookService');

const bookController = {
  /**
   * @type{import('express').RequestHandler}
   */
  async getAll(_req, res) {
    const books = await bookService.getAll();
    res.status(200).json(books);
  },
   /**
   * @type{import('express').RequestHandler}
   */
  async getbyId(req, res) {
    const { id } = req.params;
    const book = await bookService.getById(id);
    res.status(200).json(book);
  },
   /**
   * @type{import('express').RequestHandler}
   */
  async create(req, res) {
    const validatedBook = await bookService.validateNewBook(req.body)
    const createdBook = await bookService.create(validatedBook);
    res.status(201).json(createdBook);
  },
   /**
   * @type{import('express').RequestHandler}
   */
  async update(req, res) {
    const { id } = req.params;
    await bookService.exists(id);
    const validatedBook = await bookService.validateUpdate(req.body);
    const updatedBook = await bookService.update(id, validatedBook);
    res.status(200).json(updatedBook);
  },
  async delete(req, res) {
    const { id } = req.params;
    await bookService.exists(id);
    await bookService.delete(id);
    res.status(204);
  }
};

module.exports = bookController;