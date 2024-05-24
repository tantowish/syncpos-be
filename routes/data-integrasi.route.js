const express = require('express');
const dataIntegrasiController = require('../controllers/data-integrasi.controller');
const {checkAuth} = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, dataIntegrasiController.get);
router.post('/', checkAuth, dataIntegrasiController.store);

module.exports = router