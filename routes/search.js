var express = require('express');
var router = express.Router();
var search = require('../controllers/searchController');

var urls = ['http://rss.cnn.com/rss/cnn_topstories.rss'];

/* search keywords */
router.get('/', function(req, res, next) {
    var keyword = req.params.keyword;

    urls.forEach(function(url) {
        search.parseRSSfeed(url);
    });

    res.send('populating database');

});
module.exports = router;
