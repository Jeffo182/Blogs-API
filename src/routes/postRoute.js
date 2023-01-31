const { Router } = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = Router();

// router.post('/', postController.create);
router.get('/', validateToken, postController.getAll);

module.exports = router;
