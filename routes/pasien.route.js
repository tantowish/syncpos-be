const express = require('express');
const pasienController = require('../controllers/pasien.controller');
const { checkAuth } = require('../middleware/check-auth');

const router = express.Router();

router.get('/', pasienController.index);
router.get('/:nik', checkAuth, pasienController.show);
router.post('/', checkAuth, pasienController.store);
// router.patch('/:nik', checkAuth, pasienController.update);
// router.delete('/:nik', checkAuth, pasienController.destroy);

module.exports = router