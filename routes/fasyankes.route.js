const express = require('express');
const fasyankesController = require('../controllers/fasyankes.controller');
const { checkAuth } = require('../middleware/check-auth');

const router = express.Router();

router.post('/login', fasyankesController.login);
router.post('/register', fasyankesController.register);
router.get('/', checkAuth, fasyankesController.index);
router.get('/:id', checkAuth, fasyankesController.show);
router.patch('/:id', checkAuth, fasyankesController.update);
router.delete('/:id', checkAuth, fasyankesController.destroy);

module.exports = router