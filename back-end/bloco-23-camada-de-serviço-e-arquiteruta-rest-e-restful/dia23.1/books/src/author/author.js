const connection = require('../db/connection');


const modelAuthor = {
  async getAuthors() {
    const sql = 'select * from model_example.authors'
    const [authors] = await connection.query(sql);
    return authors;
  },
  async getAuthorById(authorId) {
    const sql = 'select * from model_example.authors where id = ?';
    const [[author]] = await connection.query(sql, [Number(authorId)]);
    return author;
  }
}

module.exports = modelAuthor;