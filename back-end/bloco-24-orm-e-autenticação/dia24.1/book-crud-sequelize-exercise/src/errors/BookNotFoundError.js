class BookNotFoundError extends Error {
  constructor (message) {
    super(message);

    this.name = 'BookNotFoundError';
    this.status = 404;
  }
};

module.exports = BookNotFoundError;