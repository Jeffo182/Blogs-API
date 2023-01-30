const { Router } = require('express');
const postController = require('../controllers');

const router = Router();

router.post('/', postController.create);

module.exports = router;