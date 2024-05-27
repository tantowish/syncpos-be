const express = require('express');
const lansiaPemeriksaanController = require('../controllers/lansiaPemeriksaan.controller');
const {checkAuth} = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, lansiaPemeriksaanController.index);
router.get('/:uuid', checkAuth, lansiaPemeriksaanController.show);
router.post('/', checkAuth, lansiaPemeriksaanController.store);
router.put('/:uuid', checkAuth, lansiaPemeriksaanController.update);
router.delete('/:uuid', checkAuth, lansiaPemeriksaanController.destroy);

module.exports = router