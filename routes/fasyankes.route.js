const express = require('express');
const fasyankesController = require('../controllers/fasyankes.controller');
const { checkAuth, fasyankesAuth } = require('../middleware/check-auth');

const router = express.Router();

router.post('/login', fasyankesController.login);
router.post('/register', fasyankesController.register);
router.get('/', checkAuth, fasyankesController.index);
router.get('/:id', checkAuth, fasyankesController.show);
router.patch('/:id', fasyankesAuth, fasyankesController.update);
router.delete('/:id', fasyankesAuth, fasyankesController.destroy);

module.exports = router