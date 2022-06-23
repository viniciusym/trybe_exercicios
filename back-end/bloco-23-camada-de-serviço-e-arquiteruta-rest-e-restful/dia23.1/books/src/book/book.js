const connection = require('../db/connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'select * from model_example.books;',
  );
  return books;
}

module.exports = {
  getAllBooks,
};