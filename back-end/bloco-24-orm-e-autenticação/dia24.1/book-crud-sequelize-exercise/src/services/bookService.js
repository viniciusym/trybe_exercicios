const { book } = require('../database/models');
const BookNotFoundError = require('../errors/BookNotFoundError');
const { Op } = require('sequelize');
const Joi = require('joi');

const bookService = {
  async getAll() {
    const books = book.findAll({ order: ['title', 'ASC']});
    return books;
  },
  async getById(id) {
    const bookById = await book.findByPk(id);
    if(bookById === null) throw new BookNotFoundError('Book not found');
    return bookById;
  },
  async getByAuthor(author) {
    const bookByAuthor = await book.findAll({
      where: {
        author: { [Op.substring]: author },
      },
    });
    return bookByAuthor;
  },
  async create(newBook) {
    const createdBook = await book.create(newBook);
    return createdBook;
  },
  async validateNewBook(unknownData) {
    const schema = Joi.object({
      title: Joi.string().max(255).required(),
      author: Joi.string().max(255).required(),
      pageQuantity: Joi.number().required(),
    });
    const validatedBook = schema.validateAsync(unknownData);
    return validatedBook;
  },
  async validateUpdate(unknownData) {
    const schema = Joi.object({
      title: Joi.string().max(255),
      author: Joi.string().max(255),
      pageQuantity: Joi.number(),
    });
    const validatedBook = schema.validateAsync(unknownData);
    return validatedBook;
  },
  async update(id, changes) {
    const updatedBook = await book.update(changes,
      { where: {
        id: id,
      } });
    return updatedBook;
  },
  async delete(id) {
    const deletedBook = await book.destroy({
      where: { id } });
    if(deletedBook !== 1) throw new Error('algo deu errado');
  },
  async exists(id) {
    const exists = await book.findOne({ where: { id } });
    if (exists === null) throw new BookNotFoundError('Book not found');
  }
};

module.exports = bookService;