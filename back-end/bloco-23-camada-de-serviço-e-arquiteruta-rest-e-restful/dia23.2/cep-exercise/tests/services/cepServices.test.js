const sinon = require('sinon');
const { expect } = require('chai');
const cepServices = require('../../src/services/cepServices');


describe('services/cepService', () => {
  beforeEach(() => sinon.restore());
  describe('validateCepFormat', () => {
    it('deve retornar um erro caso o cep não passe no teste do RegEx', async () => {
      const invalidCep = '0000000';

      expect(() => cepServices.validateCepFormat(invalidCep)).to.throw('CEP inválido');
    });

    it.only('não deve retornar um erro caso o cep não passe no teste do RegEx', () => {
      const validCep = '00000-000';

      const validation = cepServices.validateCepFormat(validCep)

      expect(validation).to.be.true;
    });
  });

  describe('validateCepToInsert', async () => {

  });

  describe('insertNewCep', async () => {

  });

  describe('insertNewCepWhenNotExists', async () => {

  });
});