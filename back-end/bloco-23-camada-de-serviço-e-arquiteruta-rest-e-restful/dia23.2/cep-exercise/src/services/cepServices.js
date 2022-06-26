const { getByNumber, exists } = require('../model/cepModel');

const cepServices = {
  validateCepFormat(cep) {
    const cepRegex = /\d{5}-?\d{3}/;
    const isInvalidfomart = cepRegex.test(cep) && cep.length === 8;
    return isInvalidfomart;
  },
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