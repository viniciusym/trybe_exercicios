const { Router } = require('express');
const bookController = require('../controllers/bookController');

const bookRoute = Router();

bookRoute.get('/', bookController.getAll);
bookRoute.get('/:id', bookController.getbyId);

module.exports = bookRoute;
