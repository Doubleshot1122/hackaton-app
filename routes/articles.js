const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController.js')

/* GET home page. */
router.get('/:id', articleController.getSingleArticle)

module.exports = router;