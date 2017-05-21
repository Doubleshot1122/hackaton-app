const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js')

/* GET home page. */

router.get('/', indexController.getAllUsersDropDown)


module.exports = router;
