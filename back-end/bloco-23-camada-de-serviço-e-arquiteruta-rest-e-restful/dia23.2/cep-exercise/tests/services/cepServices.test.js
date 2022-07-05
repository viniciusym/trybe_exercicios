const sinon = require('sinon');
const { expect } = require('chai');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const cepServices = require('../../src/services/cepServices');
const Joi = require('joi');

chai.use(chaiAsPromised);


describe('services/cepService', () => {
  beforeEach(() => sinon.restore());
  describe('validateCepFormat', () => {
    it('deve retornar um erro caso o cep não passe no teste do RegEx', () => {
      const invalidCep = '0000000';

      expect(() => cepServices.validateCepFormat(invalidCep)).to.throw('CEP inválido');
    });

    it('não deve retornar um erro caso o cep não passe no teste do RegEx', () => {
      const validCep = '00000-000';

      const validation = cepServices.validateCepFormat(validCep);

      expect(validation).to.be.true;
    });
  });

  describe('validateCepToInsert', () => {
    it('deve retornar um erro caso o objeto com as informções do cep não passe no teste do Joi', async () => {
      sinon.stub(Joi, 'object').returns({
        validateAsync: sinon.stub().rejects(),
      });
      const invalidCepDataObject = {};

      expect(cepServices.validateCepToInsert(invalidCepDataObject)).to.eventually.be.rejected;
    });

    it.only('deve retornar um objeto com as chaves number, logradouro, bairro, uf, localidade case o objeto com as informções do cep passe na validação do Joi', async () => {
      sinon.stub(Joi, 'validateAsync').rejects()
      // sinon.stub(schema, 'validateAsync').returns({
      //   number: '79052-460',
      //   logradouro: 'Rua Felipe Duailibi',
      //   bairro: 'Parque Residencial Rita Vieira',
      //   localidade: 'Campo Grande',
      //   uf: 'MS'
      // });
      const validCepDataObject = {
        number: '79052-46',
        logradouro: 'Rua Felipe Duailibi',
        bairro: 'Parque Residencial Rita Vieira',
        localidade: 'Campo Grande',
        uf: 'MS'
      };

      const validation = await cepServices.validateCepToInsert(validCepDataObject);

      expect(validation).to.deep.equal(validCepDataObject);
    });
  });

  describe('insertNewCep', async () => {

  });

  describe('insertNewCepWhenNotExists', async () => {

  });
});