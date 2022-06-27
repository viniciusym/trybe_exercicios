const { checkIfExists, validateCepFormat, validateCepToInsert, checkIfNewCepAlreadyExists, insertNewCep } = require("../services/cepServices");

const cepController = {
  async getCepByNumber(req, res) {
    const { cep } = req.params;
    validateCepFormat(cep);
    await checkIfExists(cep);
    const cepData = await getByNumber(cep)
    res.status(200).json(cepData);
  },
  async insertNewCep(req, res) {
    const { body: cepData, body: { number } } = req;
    await checkIfNewCepAlreadyExists(number);
    const newCep = await validateCepToInsert(cepData);
    await insertNewCep(newCep);
    res.status(201).json(newCep);
  }
};

module.exports = cepController;