const connection = require('./db');

const cepModel = {
  async getAll() {
    const sql = 'select * from cep_lookup.cep';
    const [ceps] = await connection.query(sql);
    return ceps;
  }
}