const { Router } = require('express');
const bookController = require('../controllers/bookController');

const bookRoute = Router();

bookRoute.get('/', bookController.getAll);
bookRoute.get('/:id', bookController.getbyId);
bookRoute.post('/', bookController.create);
bookRoute.put('/:id', bookController.update);
bookRoute.delete('/:id', bookController.delete);

module.exports = bookRoute;
