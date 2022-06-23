const connection = require('../db/connection');

const getAuthors = async () => {
  const authors = await connection.execute('sel')
};

module.exports = {
  getAuthors
}