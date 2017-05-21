var express = require('express');
var router = express.Router();
var db = require('../db')
var search = require('../controllers/searchController');

/* search keywords */
router.get('/', function(req, res, next) {

    var keyword = req.params.keyword;
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

    urls.forEach(function(url) {
        search.parseRSSfeed(url);
    });

    res.send('populating database');

});

router.get('/keywords/insert', function(req, res, next) {
    search.generateKeywords();
    res.send('populating database');
});

router.get('/keywords/search', function(req, res, next) {
    var query = req.query['q'];
    db('keywords').select('keyword').where('keyword','LIKE', query+'%').then((response) => {
        var r = [];
        for(var i=0; i < response.length; i++) {
            r.push(response[i].keyword);
        }
        var results = {"keywords":r};
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
