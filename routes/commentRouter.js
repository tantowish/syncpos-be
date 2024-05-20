const express = require('express');
const commentController = require('../controllers/comment.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

//Route
router.get('/', commentController.index);
router.get('/:id', commentController.show);
router.post('/', checkAuthMiddleware.checkAuth, commentController.store);
router.patch('/:id', checkAuthMiddleware.checkAuth, commentController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, commentController.destroy);

module.exports = router