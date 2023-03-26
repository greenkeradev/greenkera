// routes/category.js

const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/catgeory');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // assuming you want to store uploaded files in a directory called 'uploads'

router.post('/', upload.single('image'), categoryController.createCategory);

// Route to get all categories
router.get('/', categoryController.getAllCategories);

module.exports = router;
