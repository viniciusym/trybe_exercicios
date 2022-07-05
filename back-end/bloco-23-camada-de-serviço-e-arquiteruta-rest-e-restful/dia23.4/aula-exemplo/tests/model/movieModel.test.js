const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/moviesModel');
const connection = require('../../models/connection');

describe('Insere um novo filme no DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };
  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })
  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const reponse = await MoviesModel.create(payloadMovie)

      expect(reponse).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
   after(async () => {
    connection.execute.restore();
  });
});