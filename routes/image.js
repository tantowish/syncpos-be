const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-upload');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

//Route
router.post('/uploads', checkAuthMiddleware.checkAuth, imageUploader.upload.single('image'), imageController.upload);

module.exports = router