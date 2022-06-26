const { Router } = require('express');
const { validateCep } = require('../controllers/cepController');
const { insertNew } = require('../model/cepModel');
const { getByNumber } = require('../services/cepServices');

const cepRoute = Router();

cepRoute.get('/:cep', validateCep, async (req, res) => {
  const { cep } = req.params;
  const cepData = await getByNumber(cep)
  res.status(200).json(cepData);
});

cepRoute.post('', async (req, res) => {
  await insertNew(req.body);
  res.status(200).json(req.body);
})

module.exports = cepRoute;