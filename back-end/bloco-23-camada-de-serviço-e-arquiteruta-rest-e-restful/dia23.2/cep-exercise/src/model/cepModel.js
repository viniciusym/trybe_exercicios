const connection = require('./db');
const axios = require('axios');

const cepModel = {
  async getAll() {
    const sql = 'select * from cep_lookup.cep';
    const [ceps] = await connection.query(sql);
    return ceps;
  },
  async exists(cepNumber) {
    const sql = 'select 1 from cep_lookup.cep where number = ?';
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
    const [insertResponse] = await connection.query(sql, [newCep]);
    return insertResponse;
  },
  async getFromOtherApi(cep) {
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`
    const response = await axios.get(endpoint);
    return response;
  },
};

module.exports = cepModel;
