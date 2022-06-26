const connection = require('./db');

const cepModel = {
  async getAll() {
    const sql = 'select * from cep_lookup.cep';
    const [ceps] = await connection.query(sql);
    return ceps;
  },
  async exists(cepNumber) {
    const sql = 'select * from cep_lookup.cep where number = ?';
    const [[cep]] = await connection.query(sql, [cepNumber]);
    return !!cep;
  },
  async getByNumber(cepNumber) {
    const sql = 'select * from cep_lookup.cep where number = ?';
    const [[cep]] = await connection.query(sql, [cepNumber]);
    return cep
  },
  async insertNew(newCep) {
    const sql = 'insert into cep_lookup.cep set ?';
    const [[insertResponse]] = await connection.query(sql, [newCep]);
    return insertResponse;
  }
};

module.exports = cepModel;
