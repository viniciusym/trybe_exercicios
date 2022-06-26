const { getByNumber, exists } = require('../model/cepModel');

const cepServices = {
  async checkIfExists(cep) {
    const cepExists = await exists(Number(cep));
    return cepExists;
  },
  async getByNumber(cep) {
    const cepNumber = Number(cep);
    const cepData = await getByNumber(cepNumber);
    return cepData;
  }
}

module.exports = cepServices;