const { Router } = require('express');
const { categoryController } = require('../controllers');
const { validateToken } = require('../middlewares');

const route = Router();

route.get('/', validateToken, categoryController.getAll);
route.post('/', validateToken, categoryController.create);

module.exports = route;