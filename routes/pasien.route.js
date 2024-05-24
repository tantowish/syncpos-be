const express = require('express');
const pasienController = require('../controllers/pasien.controller');

const router = express.Router();

router.get('/', pasienController.index);
router.get('/:nik', pasienController.show);
router.post('/', pasienController.store);
router.patch('/:nik', pasienController.update);
router.delete('/:nik', pasienController.destroy);

module.exports = router