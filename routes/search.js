var express = require('express');
var router = express.Router();
var search = require('../controllers/searchController');

var urls = [
            'http://rss.cnn.com/rss/cnn_topstories.rss',
            'http://rss.cnn.com/rss/cnn_world.rss',
            'http://rss.cnn.com/rss/cnn_us.rss',
            'http://rss.cnn.com/rss/money_latest.rss',
            'http://rss.cnn.com/rss/cnn_allpolitics.rss',
            'http://rss.cnn.com/rss/cnn_tech.rss',
            'http://rss.cnn.com/rss/cnn_health.rss	',
            'http://rss.cnn.com/rss/cnn_showbiz.rss	',
            'http://rss.cnn.com/rss/cnn_travel.rss	',
            'http://rss.cnn.com/rss/cnn_living.rss	',
            'http://rss.cnn.com/rss/cnn_freevideo.rss	',
];

/* search keywords */
router.get('/', function(req, res, next) {
    var keyword = req.params.keyword;

    urls.forEach(function(url) {
        search.parseRSSfeed(url);
    });

    res.send('populating database');

});
module.exports = router;
