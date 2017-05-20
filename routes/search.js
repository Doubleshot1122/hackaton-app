var express = require('express');
var router = express.Router();
var search = require('../controllers/searchController');

/* search keywords */
router.get('/:keyword', function(req, res, next) {
    var keyword = req.params.keyword;
    res.send('input keyword: '+keyword);
});

module.exports = router;
