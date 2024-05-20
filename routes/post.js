const express = require('express');
const postController = require('../controllers/post.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.get('/', postController.index);
router.get('/:id', checkAuthMiddleware.checkAuth, postController.show);
router.post('/', checkAuthMiddleware.checkAuth, postController.store);
router.patch('/:id', checkAuthMiddleware.checkAuth, postController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, postController.destroy);

module.exports = router