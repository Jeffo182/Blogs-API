const { Router } = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middlewares');

const route = Router();

route.post('/', userController.create);
route.get('/:id', validateToken, userController.getById);
route.get('/', validateToken, userController.getAll);

module.exports = route;