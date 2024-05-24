const express = require('express');
const fasyankesController = require('../controllers/fasyankes.controller');

const router = express.Router();

router.get('/', fasyankesController.index);
router.get('/:id', fasyankesController.show);
router.post('/', fasyankesController.store);
router.patch('/:id', fasyankesController.update);
router.delete('/:id', fasyankesController.destroy);

module.exports = router