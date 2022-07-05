const InvalidDataError = require('../errors/InvalidDataError');
const NotFoundError = require('../errors/NotFoundError');
const AlreadyExistsError = require('../errors/AlreadyExistsError');
const { getByNumber, exists, insertNew, getFromOtherApi } = require('../model/cepModel');
const Joi = require('joi');
const viaCepModel = require('../model/viaCepModel');

const schema = Joi.object({
  number: Joi.string().pattern(new RegExp(/\d{5}-?\d{3}/)).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
})

const cepServices = {
  validateCepFormat(cep) {
    const cepRegex = /\d{5}-?\d{3}/;
    const isInvalidfomart = cepRegex.test(cep) && cep.length === 9;
    if (!isInvalidfomart) {
      throw new InvalidDataError('CEP inválido');
    }
    return isInvalidfomart
  },
  async validateCepToInsert(cep) {
    const value = await schema.validateAsync(cep);
    return value;
  },
  async insertNewCep(cep) {
    const insertResponse = await insertNew(cep);
    return insertResponse;
  },
  async checkIfNewCepAlreadyExists(cep) {
    const cepExists = await exists(cep);
    if (cepExists) {
      throw new AlreadyExistsError('CEP já existente');
    }
  },
  async insertNewCepWhenNotExists(cep) {
    const cepData = await getCepFromOtherApi(cep);
    if (cepData.erro) {
      throw new NotFoundError('CEP não encontrado');
    }
    return cepData;
  },
  async checkIfExists(cep) {
    const cepExists = await exists(cep);
    if (!cepExists) {
      const { data } = await viaCepModel.getByNumber(cep);
      if (data.erro) {
        throw new NotFoundError('CEP não encontrado');
      };
      const { cep: number,
        logradouro,
        bairro,
        localidade,
        uf } = data;
      const cepObject = {
        number,
        logradouro,
        bairro,
        localidade,
        uf
      };
      const { affectedRows }= await insertNew(cepObject)
      return !!affectedRows;
    };
    return cepExists;
  },
  async getByNumber(cep) {
    const cepNumber = cep;
    const cepData = await getByNumber(cepNumber);
    return cepData;
  }
}

module.exports = cepServices;