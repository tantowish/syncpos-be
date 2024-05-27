const express = require('express');
const balitaPemeriksaanController = require('../controllers/balitaPemeriksaan.controller');
const {checkAuth} = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, balitaPemeriksaanController.index);
router.get('/:uuid', checkAuth, balitaPemeriksaanController.show);
router.post('/', checkAuth, balitaPemeriksaanController.store);
router.put('/:uuid', checkAuth, balitaPemeriksaanController.update);
router.delete('/:uuid', checkAuth, balitaPemeriksaanController.destroy);

module.exports = router