const { Router } = require('express');
const { getCepByNumber, insertNewCep } = require('../controllers/cepController');

const cepRoute = Router();

cepRoute.get('/:cep', getCepByNumber);

cepRoute.post('', insertNewCep)

module.exports = cepRoute;