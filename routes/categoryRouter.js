const express = require('express');
const categoryController = require('../controllers/category.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

//Route
router.get('/', categoryController.index);
router.get('/:id', categoryController.show);
router.post('/', checkAuthMiddleware.checkAuth, categoryController.store);
router.patch('/:id', checkAuthMiddleware.checkAuth, categoryController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, categoryController.destroy);

module.exports = router