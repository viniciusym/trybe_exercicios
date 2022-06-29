const { expect } = require('chai');
const sinon = require('sinon');
const cepModel = require('../../src/model/cepModel');
const connection = require('../../src/model/db');

describe('model/cepModel', () => {
  beforeEach(() => sinon.restore());

  describe('getByNumber', () => {
    it('deve retornar undefined quando não foi encontrado o cep no DB', async () => {
      const resolve = [[]];
      sinon.stub(connection, 'query').resolves(resolve);
      const response = await cepModel.getByNumber('12345678');
      expect(response).to.be.undefined;
    })
    it('deve retornar um objeto com as chaves number, logradouro, bairro, uf, localidade quando for encontrado o cep no DB', async () => {
      const resolve = {
        number: "87043-600",
        logradouro: "Rua Rio Beni",
        bairro: "Jardim Novo Oásis",
        localidade: "Maringá",
        uf: "PR"
      };
      sinon.stub(connection, 'query').resolves([[resolve]]);

      const response = await cepModel.getByNumber('87043-600');
      expect(response).to.deep.equal(resolve);
    });
  });
  describe('exists', () => {
    it('deve retornar false quando não foi encontrado o cep no DB', async () => {
      const resolve = [[]];
      sinon.stub(connection, 'query').resolves(resolve);
      const response = await cepModel.exists('12345678');
      expect(response).to.be.false;
    })
    it('deve retornar true for encontrado o cep no DB', async () => {
      const resolve = {
        number: "87043-600",
        logradouro: "Rua Rio Beni",
        bairro: "Jardim Novo Oásis",
        localidade: "Maringá",
        uf: "PR"
      };
      sinon.stub(connection, 'query').resolves([[resolve]]);

      const response = await cepModel.exists('87043-600');
      expect(response).to.be.true;
    });
  });
  describe('insertNew', () => {
    it('deve retornar undefined quando o cep não foi adicionado no no DB', async () => {
      const resolve = [];
      sinon.stub(connection, 'query').resolves(resolve);
      const response = await cepModel.insertNew({});
      expect(response).to.be.undefined;
    })
    it('deve retornar um objeto com a chave affectedRows com o valor 1 quando o cep for adicionado com sucesso no DB', async () => {
      const resolve = {
        affectedRows: 1,
        fieldCount: 0,
        info: '',
        insertId: 0,
        serverStatus: 2,
        warningStatus: 0,
      };
      sinon.stub(connection, 'query').resolves([resolve]);

      const response = await cepModel.insertNew('87043-600');
      expect(response.affectedRows).to.be.equal(1);
    });
  });
})