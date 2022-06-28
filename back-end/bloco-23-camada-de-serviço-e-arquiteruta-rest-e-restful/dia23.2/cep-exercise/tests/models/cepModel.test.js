const { expect } = require('chai');
const sinon = require('sinon');
const cepModel = require('../../src/model/cepModel');
const connection = require('../../src/model/db');

describe('model/cepModel', () => {
  describe('testa função getByNumber', () => {
    before(() => {
      const response = [[]];

      sinon.stub(connection, 'query').resolves(response);
    });
    describe('testa quando não foi encontrado o cep no DB', () => {
      it('deve retornar undefined', async () => {
        const response = await cepModel.getByNumber('12345678');
        console.log(response);
        expect(response).to.be.undefined;
      });
    })

  });

})