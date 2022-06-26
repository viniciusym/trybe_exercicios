const { checkIfExists } = require("../services/cepServices");

const cepController = {
  async validateCep(req, res, next) {
    const { cep } = req.params;
    const cepRegex = /\d{5}-?\d{3}/;
    const exists = await checkIfExists(cep);
    const validfomart = cepRegex.test(cep) && cep.length === 8;
    switch(false) {
      case validfomart:
        res.status(401).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
        break;
      case exists:
        res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
        break;
      default:
        next();
        break;
    }
  }
};

module.exports = cepController;