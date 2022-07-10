const { Router } = require('express');
const { getAll } = require('../controllers/bookController');

const bookRoute = Router();

bookRoute.get('/', getAll);

module.exports = bookRoute;
